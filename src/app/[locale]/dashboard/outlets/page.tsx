import ChannelCard from "@/components/cards/ChannelCard";
import ChannelCardLarge from "@/components/cards/ChannelCardLarge";
import SectionHeading from "@/components/SectionHeading";

import { mockFetch } from "@/utils";
import Link from "next/link";

type TOutlet = {
  id: string;
  label: string;
  imageSrc: string;
  trending: string[];
  bias: {
    party: string;
    percentage: number;
  }[];
};

export default async function Page() {
  try {
    const outlets: TOutlet[] = await mockFetch("outlets");
    console.log("Outlets data:", outlets);

    return (
      <div className=" px-6">
        <SectionHeading title="Explore Outlets" />
        <div className="grid gap-x-8 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {outlets.map((outlet: TOutlet) => (
            <Link href={`/outlet/${outlet.label}`} key={outlet.label}>
              <ChannelCardLarge
                key={outlet.id}
                imageSrc={outlet.imageSrc}
                label={outlet.label}
                id={outlet.label}
                trending={outlet.trending}
                bias={outlet.bias}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error: any) {
    console.log("Error fetching outlets data:", error);
    return <div></div>;
  }
}
