import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { PiCaretRightBold } from "react-icons/pi";

type SectionHeadingProps = {
  title: string;
  seeAllUrl?: string;
  size?: "sm" | "md" | "lg";
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  seeAllUrl,
  size = "md",
}) => {
  return (
    <div className="flex justify-between items-center w-full pb-6">
      <div
        className={clsx(
          "font-bold",
          size === "sm" && "text-lg",
          size === "md" && "text-xl",
          size === "lg" && "text-2xl"
        )}
      >
        {title}
      </div>{" "}
      {seeAllUrl && (
        <Link
          href={seeAllUrl}
          className="text-md text-accent flex gap-1 items-center cursor-pointer "
        >
          See all <PiCaretRightBold className="text-sm mt-1 " />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
