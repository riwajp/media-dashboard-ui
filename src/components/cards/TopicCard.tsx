import Image from "next/image";
import React from "react";

type TopicCardProps = {
  label: string;
  imageSrc: string;
};

const TopicCard: React.FC<TopicCardProps> = ({ label, imageSrc }) => {
  return (
    <div className="flex flex-col gap-8 bg-base-300 p-4 rounded-md justify-between">
      <Image src={imageSrc} alt={label} width={75} height={75} />
      <div className="text-xl font-semibold text-white">{label}</div>
    </div>
  );
};

export default TopicCard;
