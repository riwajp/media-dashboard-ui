import { FiPlus } from "react-icons/fi";
import React from "react";

type TopicCardProps = {
  label: string;
  size?: "small" | "large";
  className?: string;
};

const TopicCard: React.FC<TopicCardProps> = ({
  label,
  size = "large",
  className,
}) => {
  const baseStyle =
    "transition-all duration-200 flex items-center rounded-3xl cursor-pointer";

  const sizeStyles =
    size === "small"
      ? "bg-base-200 hover:bg-base-300 px-2 py-0.5 text-xs gap-1"
      : "bg-base-300 hover:bg-secondary px-3 py-1 text-sm gap-2 justify-between";

  return (
    <div className={`${baseStyle} ${sizeStyles} ${className}`}>
      <div>{label}</div>
      {size === "large" && <FiPlus />}
    </div>
  );
};

export default TopicCard;
