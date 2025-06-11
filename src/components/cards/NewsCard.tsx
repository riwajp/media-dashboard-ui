import React from "react";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import BiasMeter from "../BiasMeter";
import TopicCard from "./TopicCard";

type NewsCardProps = {
  label: string;
  source: string;
  imageSrc: string;
  className?: string;
  keywords?: string[];
  children?: React.ReactNode;
};

const NewsCard: React.FC<NewsCardProps> = ({
  label,
  source,
  imageSrc,
  className,
  keywords,
  children,
}) => {
  return (
    <div
      className={`group max-w-[112rem] ${
        keywords ? "min-h-32" : "min-h-20"
      } flex flex-col gap-3 `}
    >
      <div
        className={`flex flex-col gap-3 rounded-2xl cursor-pointer transition-all duration-300   ${className}`}
      >
        <div className="relative rounded-xl w-full h-64 overflow-hidden ">
          <Image
            src={imageSrc}
            width={300}
            height={300}
            alt={label}
            className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col gap-2  w-full">
          <div className="font-semibold">{label}</div>

          <div className="flex justify-between items-center">
            <div className="bg-base-200 text-xs p-1 rounded-sm w-fit text-accent hover:bg-secondary transition-all duration-200">
              {source}
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

      {children}
    </div>
  );
};

export default NewsCard;
