import { ReactElement } from "react";
import { I18nProviderClient } from "@locales/client";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}) {
  const { locale } = await params;
  console.log(locale);

  return (
    <I18nProviderClient locale={locale}>
      <div className="h-full">{children}</div>
    </I18nProviderClient>
  );
}
