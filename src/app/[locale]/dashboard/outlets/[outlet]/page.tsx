import React from "react";
import Image from "next/image";

import BiasMeter from "@/components/BiasMeter";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegNewspaper } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { mockFetch } from "@/utils";
import Draggable from "@/components/Draggable";
import { IoIosTrendingUp } from "react-icons/io";
import TopicCard from "@/components/cards/TopicCard";
import SectionHeading from "@/components/SectionHeading";
import HeadlineCard from "@/components/cards/HeadlineCard";
import { BarChart } from "@/components/charts/BarChart";

type TOutlet = {
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
];

import { DonutChart } from "@/components/charts/DonutChart";

const chartdata = [
  {
    name: "SolarCells",
    amount: 4890,
  },
  {
    name: "Glass",
    amount: 2103,
  },
  {
    name: "JunctionBox",
    amount: 2050,
  },
  {
    name: "Adhesive",
    amount: 1300,
  },
  {
    name: "BackSheet",
    amount: 1100,
  },
  {
    name: "Frame",
    amount: 700,
  },
  {
    name: "Encapsulant",
    amount: 200,
  },
];

const barChartData = [
  { name: "Amphibians", "Number of articles": 2488 },
  { name: "Birds", "Number of articles": 1445 },
  { name: "Crustaceans", "Number of articles": 743 },
  { name: "Ferns", "Number of articles": 281 },
  { name: "Arachnids", "Number of articles": 251 },
  { name: "Corals", "Number of articles": 232 },
  { name: "Algae", "Number of articles": 98 },
];

export default async function Page() {
  try {
    const outlets: TOutlet[] = await mockFetch("outlets");

    const outlet: TOutlet = outlets[0];
    console.log("Outlets data:", outlets);

    return (
      <div className="flex flex-col gap-12 ">
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

        <div className="px-6 mt-2 grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-2 l">
          <div className="flex flex-col gap-6">
            <SectionHeading title="Coverage" />

            <DonutChart
              className="mx-auto w-full  h-full"
              data={chartdata}
              category="name"
              value="amount"
              showLabel={true}
            />
          </div>

          <div className="flex flex-col gap-6">
            <SectionHeading title="Topics" />

            <BarChart
              className="h-56"
              data={barChartData}
              index="name"
              categories={["Number of articles"]}
              yAxisWidth={80}
              layout="vertical"
            />
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    console.log("Error fetching outlets data:", error);
    return <div></div>;
  }
}
