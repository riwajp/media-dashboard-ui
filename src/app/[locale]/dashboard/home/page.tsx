import ChannelCard from "@/components/cards/ChannelCard";
import TopicCard from "@/components/cards/TopicCard";
import Draggable from "@/components/Draggable";
import HeadlineCard from "@/components/cards/HeadlineCard";
import SectionHeading from "@/components/SectionHeading";
import { mockFetch } from "@/utils";
import Link from "next/link";
import { IoIosTrendingUp } from "react-icons/io";

type TOutlet = {
  id: string;
  label: string;
  imageSrc: string;
};

const topics = [
  "KP Oli",
  "Kathmandu",
  "Corruption",
  "Protest",
  "Economy",
  "Sports",
  "Entertainment",
  "Prachanda",
  "Air Pollution",
];

const headlines = [
  {
    label: "Nepal's Political Landscape",
    source: "The Kathmandu Post",
    imageSrc: "https://en.setopati.com/uploads/posts/Oli-1710241632.jpg",
  },
  {
    label: "Inflation Rises in South Asia",
    source: "Himalayan Times",
    imageSrc:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/inflationweb-1681912076.jpg",
  },
  {
    label: "New Hydropower Project Launched",
    source: "MyRepublica",
    imageSrc: "https://ehpl.com.np/wp-content/uploads/2021/12/Hydropower.jpg",
  },
  {
    label: "Inflation Rises in South Asia",
    source: "Himalayan Times",
    imageSrc:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/inflationweb-1681912076.jpg",
  },
  {
    label: "Nepal's Political Landscape",
    source: "The Kathmandu Post",
    imageSrc: "https://en.setopati.com/uploads/posts/Oli-1710241632.jpg",
  },

  {
    label: "New Hydropower Project Launched",
    source: "MyRepublica",
    imageSrc: "https://ehpl.com.np/wp-content/uploads/2021/12/Hydropower.jpg",
  },
];

export default async function Page() {
  try {
    const outlets: TOutlet[] = await mockFetch("outlets");
    console.log("Outlets data:", outlets);

    return (
      <div className="flex flex-col gap-12">
        <Draggable>
          <div className="flex gap-5 items-center border-base-300 border-b border-t pl-4 py-3   w-full">
            <IoIosTrendingUp className="text-xl text-base-content shrink-0" />
            {topics.map((topic) => (
              <TopicCard key={topic} label={topic} className="shrink-0" />
            ))}
          </div>
        </Draggable>

        <div className="px-6">
          <SectionHeading title="Today's Headlines" seeAllUrl="headlines" />
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {headlines.map((headline, index) => (
              <HeadlineCard
                key={index}
                label={headline.label}
                source={headline.source}
                imageSrc={headline.imageSrc}
              />
            ))}
          </div>
        </div>

        {/* Outlets */}
        <div className="px-4">
          <SectionHeading title="Explore Outlets" seeAllUrl="outlets" />
          <Draggable>
            <div className="flex gap-6 ">
              {outlets.map((outlet: TOutlet) => (
                <Link
                  href={`/dashboard/outlets/${outlet.id}`}
                  key={outlet.label}
                >
                  <ChannelCard
                    id={outlet.id}
                    key={outlet.id}
                    imageSrc={outlet.imageSrc}
                    label={outlet.label}
                  />
                </Link>
              ))}
            </div>
          </Draggable>
        </div>
        <div></div>
      </div>
    );
  } catch (error: any) {
    console.log("Error fetching outlets data:", error);
    return <div></div>;
  }
}
