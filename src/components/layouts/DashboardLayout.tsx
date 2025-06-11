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
      <div className="fixed top-0 left-0 w-60  h-full z-50 ">
        <Navbar isHidden={false} />
      </div>
      <div className="fixed top-0 left-0 pl-60 right-0 w-full  h-32 z-50">
        <Headerbar />
      </div>
      <div className="pl-60 pt-28 pb-4 z-0">{children}</div>
    </div>
  );
}
