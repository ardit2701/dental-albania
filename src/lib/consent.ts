export const CONSENT_KEY = 'maxillodent_ad_consent';

export function getAdConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(CONSENT_KEY) === 'true';
}

export function setAdConsent(value: boolean): void {
  localStorage.setItem(CONSENT_KEY, String(value));
  window.dispatchEvent(new Event('consentchange'));
}

export function hasAnsweredConsent(): boolean {
  if (typeof window === 'undefined') return true;
  return localStorage.getItem(CONSENT_KEY) !== null;
}
