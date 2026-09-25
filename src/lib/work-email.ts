const CONSUMER_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.co.in",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.co.uk",
  "outlook.com",
  "outlook.co.uk",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "protonmail.com",
  "proton.me",
  "pm.me",
  "gmx.com",
  "gmx.net",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "mail.com",
  "inbox.com",
  "fastmail.com",
  "hushmail.com",
  "tutanota.com",
  "tuta.com",
  "mail.ru",
  "qq.com",
  "163.com",
  "126.com",
  "sina.com",
  "rediffmail.com",
  "lycos.com",
  "excite.com",
  "aim.com",
  "wow.com",
  "att.net",
  "sbcglobal.net",
  "comcast.net",
  "verizon.net",
  "bellsouth.net",
  "charter.net",
  "cox.net",
  "earthlink.net",
  "juno.com",
  "optonline.net",
  "sky.com",
  "btinternet.com",
  "yopmail.com",
  "guerrillamail.com",
  "tempmail.com",
  "10minutemail.com",
]);

const EMAIL_RE = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;

export function isWorkEmail(value: string): boolean {
  const match = value.trim().toLowerCase().match(EMAIL_RE);
  if (!match?.[1]) return false;
  const domain = match[1];
  if (CONSUMER_DOMAINS.has(domain)) return false;
  const parts = domain.split(".");
  if (parts.length >= 3) {
    const parent = parts.slice(-2).join(".");
    if (CONSUMER_DOMAINS.has(parent)) return false;
  }
  return true;
}

export const WORK_EMAIL_ERROR =
  "Use a work email. Personal providers (Gmail, Yahoo, Outlook, iCloud, and similar) are blocked.";
