import Image from "next/image";
import React from "react";

type ChannelCardProps = {
  label: string;
  imageSrc: string;
};

const ChannelCard: React.FC<ChannelCardProps> = ({ label, imageSrc }) => {
  return (
    <div className="  cursor-pointer hover:shadow-2xl hover:bg-base-200 transition-all duration-300 flex flex-col gap-4 bg-base-300 px-2 py-5 rounded-lg justify-between items-center w-32">
      <div className="grow flex flex-col justify-center ">
        <Image src={imageSrc} alt={label} width={75} height={75} />
      </div>
      <div className="text-md font-semibold text-base-content text-center">
        {label}
      </div>
    </div>
  );
};

export default ChannelCard;
