import { getI18n } from "@locales/server";

export default async function Page() {
  const t = await getI18n();

  return (
    <div className="font-bold  text-5xl">This is the home page in english.</div>
  );
}
