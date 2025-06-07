import React from "react";

type BiasSegment = {
  party: string; // e.g., "uml", "nc", "mc"
  percentage: number;
};

type BiasMeterProps = {
  segments: BiasSegment[];
};

// Mapping short codes to colors
const partyColorMap: Record<string, string> = {
  uml: "bg-red-500", // CPN-UML
  nc: "bg-blue-500", // Nepali Congress
  mc: "bg-yellow-500", // Maoist Centre
  rpp: "bg-purple-500", // Rastriya Prajatantra Party
  jsp: "bg-green-500", // Janata Samajbadi Party
  ind: "bg-gray-500", // Independent
  default: "bg-gray-400", // Fallback
};

const BiasMeter: React.FC<BiasMeterProps> = ({ segments }) => {
  return (
    <div className="">
      <div className="h-1 w-full rounded-full overflow-hidden flex">
        {segments.map((seg, index) => {
          const color = partyColorMap[seg.party] || partyColorMap.default;
          return (
            <div
              key={index}
              className={`${color} h-full`}
              style={{ width: `${seg.percentage}%` }}
              title={`${seg.party.toUpperCase()} - ${seg.percentage}%`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BiasMeter;
