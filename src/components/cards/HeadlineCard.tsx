import React from "react";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import BiasMeter from "../BiasMeter";
import { IoIosTrendingUp } from "react-icons/io";
import TopicCard from "./TopicCard";

type HeadlineCardProps = {
  label: string;
  source: string;
  imageSrc: string;
  className?: string;
  keywords?: string[];
};

const HeadlineCard: React.FC<HeadlineCardProps> = ({
  label,
  imageSrc,
  className,
  keywords,
}) => {
  return (
    <div
      className={`group max-w-[112rem] ${
        keywords ? "min-h-32" : "min-h-20"
      } flex flex-col gap-3`}
    >
      <div
        className={`flex gap-3 rounded-2xl cursor-pointer transition-all duration-300  ${className}`}
      >
        <div
          className={`rounded-xl ${
            keywords ? "w-24" : "w-20"
          } h-full shrink-0 overflow-hidden`}
        >
          <Image
            src={imageSrc}
            width={100}
            height={100}
            alt={label}
            className={`object-cover w-full  ${
              keywords ? "min-h-24" : "h-20"
            } h-full rounded-xl transition-transform duration-500 group-hover:scale-110`}
          />
        </div>
        <div className="flex flex-col gap-2 justify-between w-full">
          <div className="font-semibold">{label}</div>

          <BiasMeter
            segments={[
              { party: "uml", percentage: 70 },
              { party: "nc", percentage: 10 },
              { party: "mc", percentage: 20 },
            ]}
          />

          <div className="flex justify-between items-center">
            <div className="bg-base-200 text-xs p-1 rounded-sm w-fit text-accent hover:bg-secondary transition-all duration-200">
              BBC News
            </div>
            <div className="text-sm text-accent flex items-center gap-2">
              <FaClock className="text-accent text-xs" /> 02:25 pm
            </div>
          </div>
        </div>
      </div>
      {keywords && (
        <div className="flex flex-wrap gap-1 items-center    w-full">
          {keywords.map((topic) => (
            <TopicCard
              key={topic}
              label={topic}
              className="shrink-0"
              size="small"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeadlineCard;
