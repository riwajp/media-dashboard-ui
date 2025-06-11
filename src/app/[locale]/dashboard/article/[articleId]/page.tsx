import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/SectionHeading";
import BiasDistribution from "@/components/BiasDistribution";

const biasData = [
  { role: "leading", percentage: 60, color: "bg-red-500" },
  { role: "neutral", percentage: 10, color: "bg-gray-400" },
  { role: "opposition", percentage: 30, color: "bg-blue-500" },
];

export default async function Page() {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="pr-4 border-r border-base-300 lg:col-span-2">
          <SectionHeading
            size="lg"
            title="Protesters Demand Government Transparency in Kathmandu"
          />
          <div className="w-full  h-auto object-contain  margin-inline-auto">
            <Image
              width={700}
              height={700}
              alt={"News Image "}
              src="https://en.setopati.com/uploads/posts/Oli-1710241632.jpg"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="lg:col-span-1 bg-base-200 p-3 pl-5 rounded-md">
          <SectionHeading title="Bias Distribution" />

          <BiasDistribution segments={biasData as any} />
        </div>
      </div>
    </div>
  );
}
