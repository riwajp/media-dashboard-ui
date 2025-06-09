import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { mockFetch } from "@/utils";
import BiasMeter from "@/components/BiasMeter";

type TOutlet = {
  label: string;
  imageSrc: string;
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const outlets: TOutlet[] = await mockFetch("outlets");
    const outlet: TOutlet = outlets[0];

    return (
      <div className="">
        {/* Top Outlet Header */}
        <div className="flex gap-4 justify-between items-center px-6 py-6  mb-4">
          <div className="flex gap-4 items-center h-16">
            <div className="bg-white rounded-xl w-16 h-full shrink-0 overflow-hidden">
              <Image
                src={outlet.imageSrc}
                width={100}
                height={100}
                alt={outlet.label}
                className="object-contain w-full h-full rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-between h-full py-2">
              <div className="text-2xl font-bold">{outlet.label}</div>
              <BiasMeter
                segments={[
                  { party: "uml", percentage: 70 },
                  { party: "nc", percentage: 10 },
                  { party: "mc", percentage: 20 },
                ]}
              />
            </div>
          </div>

          <div className="text-md py-2 px-4 rounded-lg bg-base-300 flex gap-2 items-center hover:bg-base-200 cursor-pointer transition">
            <FaExternalLinkAlt className="text-sm" /> Visit
          </div>
        </div>

        {/* Slot for children (main content) */}
        <div>{children}</div>
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching outlets data:", error);
    return <div className="p-6 text-red-500">Failed to load outlet info.</div>;
  }
}
