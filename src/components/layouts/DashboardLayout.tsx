"use  client";

import { ReactElement, useState } from "react";
import Navbar from "@/components/Navbar";
import Headerbar from "../Headerbar";

export default function DashboardLayout({
  children,
}: {
  children: ReactElement;
}) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const navWidth = isNavCollapsed ? 60 : 208;
  const contentPaddingLeft = isNavCollapsed ? 60 : 208;
  const headerPaddingLeft = isNavCollapsed ? 60 : 208;

  return (
    <div className="relative w-full h-full">
      <div
        className="fixed top-0 left-0 h-full z-20 transition-width duration-300"
        style={{ width: navWidth }}
      >
        <Navbar
          isCollapsed={isNavCollapsed}
          setIsCollapsed={setIsNavCollapsed}
        />
      </div>

      <div
        className="fixed top-0 right-0 h-32 z-10 transition-padding duration-300"
        style={{ left: headerPaddingLeft + 12, right: 0 }}
      >
        <Headerbar />
      </div>

      <div
        className="pt-28 pb-4 z-0 h-full transition-padding duration-300"
        style={{ paddingLeft: contentPaddingLeft }}
      >
        {children}
      </div>
    </div>
  );
}
