import React from "react";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import BiasMeter from "../BiasMeter";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegNewspaper } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import TopicCard from "./TopicCard";

type ChannelCardLargeProps = {
  label: string;
  id: string;
  imageSrc: string;
  className?: string;
  trending: string[];
  bias: {
    party: string;
    percentage: number;
  }[];
};

const ChannelCardLarge: React.FC<ChannelCardLargeProps> = ({
  label,
  id,
  imageSrc,
  trending,
  bias,
  className,
}) => {
  return (
    <div
      className={`group max-w-[112rem] flex flex-col gap-4  min-h-42 rounded-2xl cursor-pointer transition-all duration-300  ${className}`}
    >
      <div className="flex gap-3 ">
        <div className="bg-white rounded-xl w-24 h-24 shrink-0 overflow-hidden ">
          <Image
            src={imageSrc}
            width={100}
            height={100}
            alt={label}
            className="object-contain w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-2 justify-between w-full">
          <div className="font-semibold">{label}</div>

          <BiasMeter segments={bias} />

          <div className="flex gap-4 items-center">
            <div className="text-xs p-1 rounded-lg bg-success flex gap-1 items-center">
              <VscWorkspaceTrusted className="text-xs" />
              8.5
            </div>

            <div className="text-xs p-1 rounded-lg bg-base-300 flex gap-1 items-center">
              <FaRegNewspaper className="text-sm" />
              24
            </div>

            <div className="text-xs p-1 rounded-lg bg-base-300 flex gap-1 items-center">
              <FaExternalLinkAlt className="text-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center    w-full">
        <IoIosTrendingUp className="text-lg text-base-content shrink-0" />
        {trending.map((topic) => (
          <TopicCard
            key={topic}
            label={topic}
            className="shrink-0"
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

export default ChannelCardLarge;
