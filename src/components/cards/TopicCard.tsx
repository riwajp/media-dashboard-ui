import { FiPlus } from "react-icons/fi";
import React from "react";

type TopicCardProps = {
  label: string;
  className?: string;
};

const TopicCard: React.FC<TopicCardProps> = ({ label, className }) => {
  return (
    <div
      className={`bg-base-300 hover:bg-secondary transition-all duration-200 flex gap-2 items-center justify-between rounded-3xl px-3 py-1 text-sm cursor-pointer ${className}`}
    >
      <div>{label}</div>
      <FiPlus />
    </div>
  );
};

export default TopicCard;
