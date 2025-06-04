import { getI18n, getScopedI18n } from "@locales/server";
import { ReactElement } from "react";
import Navbar from "@/components/Navbar";
import Headerbar from "../Headerbar";

export default async function DashboardLayout({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-60  h-full ">
        <Navbar isHidden={false} />
      </div>
      <div className="fixed top-0 left-0 pl-60 right-0 w-full  h-32">
        <Headerbar />
      </div>
      <div className="pl-64 pt-32 pr-4 pb-4 ">{children}</div>
    </div>
  );
}
