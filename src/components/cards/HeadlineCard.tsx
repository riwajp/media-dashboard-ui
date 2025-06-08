import React from "react";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import BiasMeter from "../BiasMeter";

type TopicCardProps = {
  label: string;
  source: string;
  imageSrc: string;
  className?: string;
};

const TopicCard: React.FC<TopicCardProps> = ({
  label,
  imageSrc,
  className,
}) => {
  return (
    <div
      className={`group max-w-[112rem] h-20 flex gap-3 rounded-2xl cursor-pointer transition-all duration-300  ${className}`}
    >
      <div className="rounded-xl w-20 h-full shrink-0 overflow-hidden">
        <Image
          src={imageSrc}
          width={100}
          height={100}
          alt={label}
          className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-110"
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
  );
};

export default TopicCard;
