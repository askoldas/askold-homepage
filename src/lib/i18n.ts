import { en } from "@/content/en";

export const activeLocales = ["en"] as const;
export const plannedLocales = ["lv", "ru"] as const;
export type ActiveLocale = (typeof activeLocales)[number];
export type PlannedLocale = (typeof plannedLocales)[number];
export const defaultLocale: ActiveLocale = "en";
const content = { en };

export function getContent(locale: ActiveLocale = defaultLocale) {
  return content[locale];
}
