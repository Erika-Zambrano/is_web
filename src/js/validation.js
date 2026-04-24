export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const INSTAGRAM_REGEX = /^@[a-zA-Z0-9._]+$/;

export function normalizeInstagram(username) {
  const trimmed = username.trim();
  return trimmed.startsWith('@') ? trimmed : '@' + trimmed;
}
