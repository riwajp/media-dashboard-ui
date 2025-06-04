import ChannelCard from "@/components/cards/ChannelCard";
import { mockFetch } from "@/utils";

type TOutlet = {
  label: string;
  imageSrc: string;
};

export default async function Page() {
  try {
    const outlets: TOutlet[] = await mockFetch("outlets");
    console.log("Outlets data:", outlets);

    return (
      <div>
        <div className="text-3xl font-bold pb-6">Explore Outlets</div>
        <div className="flex gap-6">
          {outlets.map((outlet: TOutlet) => (
            <ChannelCard
              key={outlet.label}
              imageSrc={outlet.imageSrc}
              label={outlet.label}
            />
          ))}
        </div>
      </div>
    );
  } catch (error: any) {
    console.log("Error fetching outlets data:", error);
    return <div></div>;
  }
}
