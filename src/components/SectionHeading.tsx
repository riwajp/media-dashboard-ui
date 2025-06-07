import Link from "next/link";
import React from "react";
import { PiCaretRightBold } from "react-icons/pi";

type SectionHeadingProps = {
  title: string;
  seeAllUrl?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  seeAllUrl,
}) => {
  return (
    <div className="flex justify-between items-center w-full pb-6">
      <div className="text-2xl font-extrabold ">{title}</div>
      {seeAllUrl && (
        <Link
          href={seeAllUrl}
          className="text-lg text-accent flex gap-1 items-center cursor-pointer "
        >
          See all <PiCaretRightBold className="text-sm mt-1 " />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
