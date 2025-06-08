import Image from "next/image";
import React from "react";

type ChannelCardProps = {
  label: string;
  imageSrc: string;
  id: string;
};

const ChannelCard: React.FC<ChannelCardProps> = ({ label, imageSrc, id }) => {
  return (
    <div className=" cursor-pointer hover:shadow-2xl hover:bg-base-300 transition-all duration-300 flex flex-col gap-4 bg-base-200 px-2 py-3 rounded-lg justify-between items-center w-28 h-32">
      <div className="grow flex flex-col justify-center max-h-16">
        <Image
          src={imageSrc}
          alt={label}
          width={100}
          height={100}
          className="w-full h-full onject-contain"
        />
      </div>
      <div className="text-md font-semibold text-base-content text-center">
        {id}
      </div>
    </div>
  );
};

export default ChannelCard;
