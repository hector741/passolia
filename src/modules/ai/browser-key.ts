const databaseName = "passolia";
const storeName = "kv";
const secretKey = "openai-api-key";
const localKey = "passolia-openai-key";

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

function readKey(db: IDBDatabase): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName, "readonly").objectStore(storeName).get(secretKey);
    request.onsuccess = () => {
      const value = request.result;
      resolve(typeof value === "string" && value.trim() ? value : null);
    };
    request.onerror = () => reject(request.error);
  });
}

export async function loadOpenAiKey(): Promise<string | null> {
  const stored = window.localStorage.getItem(localKey)?.trim();
  if (stored) {
    return stored;
  }
  const db = await openDatabase();
  const saved = await readKey(db);
  if (saved) {
    window.localStorage.setItem(localKey, saved);
  }
  return saved;
}

export async function saveOpenAiKey(value: string): Promise<void> {
  const trimmed = value.trim();
  if (trimmed.length < 20 || trimmed.length > 500 || /\s/.test(trimmed)) {
    throw new Error("A chave precisa ser um texto contínuo.");
  }
  window.localStorage.setItem(localKey, trimmed);
  const db = await openDatabase();
  await new Promise<void>((resolve, reject) => {
    const request = db.transaction(storeName, "readwrite").objectStore(storeName).put(trimmed, secretKey);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function clearOpenAiKey(): Promise<void> {
  window.localStorage.removeItem(localKey);
  const db = await openDatabase();
  await new Promise<void>((resolve, reject) => {
    const request = db.transaction(storeName, "readwrite").objectStore(storeName).delete(secretKey);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
