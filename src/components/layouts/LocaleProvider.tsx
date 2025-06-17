"use client";

import { useEffect } from "react";
import { useContentStore, Language } from "@/stores/contentStore";
import { I18nProviderClient } from "@locales/client";

export default function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const { setLocale } = useContentStore();

  useEffect(() => {
    setLocale(locale === "np" ? Language.NP : Language.EN);
  }, [locale]);

  return <I18nProviderClient locale={locale}>{children} </I18nProviderClient>;
}
