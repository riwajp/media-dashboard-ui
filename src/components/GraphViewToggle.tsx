import React, { useState } from "react";

type GraphViewToggleProps = {
  initialView?: "2D" | "3D" | "GIS";
  onTabSwitch?: (view: "2D" | "3D" | "GIS") => void;
};

const TABS = ["2D", "3D", "GIS"] as const;

export default function GraphViewToggle({
  initialView = "3D",
  onTabSwitch,
}: GraphViewToggleProps) {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]>(initialView);

  function handleTabClick(tab: (typeof TABS)[number]) {
    setActiveTab(tab);
    if (onTabSwitch) onTabSwitch(tab);
  }

  return (
    <div role="tablist" className="tabs tabs-boxed bg-secondary transition-all">
      {TABS.map((tab) => (
        <a
          key={tab}
          role="tab"
          onClick={() => handleTabClick(tab)}
          className={`tab   cursor-pointer ${
            activeTab === tab ? "tab-active bg-base-300" : ""
          }`}
          aria-selected={activeTab === tab}
          tabIndex={activeTab === tab ? 0 : -1}
        >
          {tab}
        </a>
      ))}
    </div>
  );
}
