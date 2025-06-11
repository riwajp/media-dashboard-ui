import Image from "next/image";
import NewsCard from "./NewsCard";
import { mockFetch } from "@/utils";

type BlindSpotCardProps = {
  label: string;
  sources: string[];
  imageSrc: string;
  className?: string;
  keywords?: string[];
  sourceOrg: string;
};

type TOutlet = {
  id: string;
  label: string;
  imageSrc: string;
};

const BlindSpotCard: React.FC<BlindSpotCardProps> = async ({
  label,
  imageSrc,
  className,
  keywords,
  sources,
  sourceOrg,
}) => {
  const outlets: TOutlet[] = await mockFetch("outlets");

  const getSourceById = (
    id: string
  ): { label: string; imageSrc: string } | undefined => {
    const outlet = outlets.find((outlet) => outlet.id === id);
    if (!outlet) return undefined;
    return outlet;
  };

  return (
    <NewsCard
      source={sourceOrg}
      label={label}
      imageSrc={imageSrc}
      keywords={keywords}
      className={className}
    >
      <div className="">
        <div className="bg-base-300 rounded-full px-3 pl-4 py-1 min-w-24 flex">
          {sources.map((source) => (
            <div
              key={source}
              className="w-8 h-8 object-cover bg-white rounded-full ml-[-0.6rem]"
            >
              {
                <Image
                  height={100}
                  width={100}
                  className="w-full h-full rounded-full"
                  src={getSourceById(source)?.imageSrc ?? ""}
                  alt={getSourceById(source)?.label ?? "Outlet image"}
                />
              }
            </div>
          ))}
        </div>
      </div>
    </NewsCard>
  );
};

export default BlindSpotCard;
