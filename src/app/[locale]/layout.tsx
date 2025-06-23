import { ReactElement } from "react";
import LocaleProvider from "@/components/layouts/LocaleProvider";
import ToasterContainer from "@/components/ToasterContainer";

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
    <LocaleProvider locale={locale}>
      <ToasterContainer />
      <div className="h-full">{children}</div>
    </LocaleProvider>
  );
}
