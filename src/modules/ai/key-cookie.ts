export const openAiCookieName = "passolia_openai";

export function readOpenAiCookie(header: string | null): string | null {
  if (!header) {
    return null;
  }
  const parts = header.split(";").map((part) => part.trim());
  const match = parts.find((part) => part.startsWith(`${openAiCookieName}=`));
  if (!match) {
    return null;
  }
  const raw = match.slice(openAiCookieName.length + 1);
  try {
    const value = decodeURIComponent(raw).trim();
    if (value.length < 20 || value.length > 500 || /\s/.test(value)) {
      return null;
    }
    return value;
  } catch {
    return null;
  }
}

export function openAiCookie(value: string, secure: boolean): string {
  const encoded = encodeURIComponent(value);
  const secureFlag = secure ? "; Secure" : "";
  return `${openAiCookieName}=${encoded}; HttpOnly; SameSite=Lax; Path=/; Max-Age=34560000${secureFlag}`;
}

export function clearOpenAiCookie(secure: boolean): string {
  const secureFlag = secure ? "; Secure" : "";
  return `${openAiCookieName}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${secureFlag}`;
}
