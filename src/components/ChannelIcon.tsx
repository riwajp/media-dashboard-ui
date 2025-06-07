import Image from "next/image";
import React from "react";

type ChannelIconProps = {
  channel: string;
};

const ChannelIcon: React.FC<ChannelIconProps> = ({ channel }) => {
  return (
    <div className="flex items-center justify-center bg-base-content text-md p-2 rounded-full">
      {channel.charAt(0)}
    </div>
  );
};

export default ChannelIcon;
