import { emptyState, hydrateOrganizer, type OrganizerState } from "@/modules/organizer/domain";

const databaseName = "passolia";
const storeName = "kv";
const stateKey = "state";

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(storeName)) {
        request.result.createObjectStore(storeName);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function readState(db: IDBDatabase): Promise<OrganizerState | null> {
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, "readonly").objectStore(storeName).get(stateKey);
    request.onsuccess = () => {
      const value = request.result as OrganizerState | undefined;
      resolve(value ?? null);
    };
    request.onerror = () => reject(request.error);
  });
}

export async function loadOrganizer(timezone: string): Promise<OrganizerState> {
  const db = await openDatabase();
  const saved = await readState(db);
  if (saved?.preferences && Array.isArray(saved.tasks) && Array.isArray(saved.captures)) {
    return hydrateOrganizer(saved, timezone);
  }
  const fresh = emptyState(timezone);
  await saveOrganizer(fresh);
  return fresh;
}

export async function saveOrganizer(state: OrganizerState): Promise<void> {
  const db = await openDatabase();
  await new Promise<void>((resolve, reject) => {
    const request = db
      .transaction(storeName, "readwrite")
      .objectStore(storeName)
      .put(state, stateKey);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
