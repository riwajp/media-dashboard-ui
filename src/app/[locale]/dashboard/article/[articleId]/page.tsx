import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/SectionHeading";
import BiasDistribution from "@/components/BiasDistribution";
import { FaClock } from "react-icons/fa";
import TopicCard from "@/components/cards/TopicCard";
import NewsCard from "@/components/cards/NewsCard";

const biasData = [
  { role: "leading", percentage: 60, color: "bg-red-500" },
  { role: "neutral", percentage: 10, color: "bg-gray-400" },
  { role: "opposition", percentage: 30, color: "bg-blue-500" },
];

const keywords = [
  "kathmandu",
  "kp oli",
  "prachanda",
  "protest",
  "free speech",
  "social media",
];

const headlines = [
  {
    label: "Nepal's Political Landscape",
    source: "The Kathmandu Post",
    imageSrc: "https://en.setopati.com/uploads/posts/Oli-1710241632.jpg",
    keywords: ["Nepal", "politics", "government", "elections"],
  },
  {
    label: "Inflation Rises in South Asia",
    source: "Himalayan Times",
    imageSrc:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/inflationweb-1681912076.jpg",
    keywords: ["inflation", "economy", "South Asia", "prices"],
  },
  {
    label: "New Hydropower Project Launched",
    source: "MyRepublica",
    imageSrc: "https://ehpl.com.np/wp-content/uploads/2021/12/Hydropower.jpg",
    keywords: ["hydropower", "energy", "Nepal", "infrastructure"],
  },
  {
    label: "Inflation Rises in South Asia",
    source: "Himalayan Times",
    imageSrc:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/inflationweb-1681912076.jpg",
    keywords: ["inflation", "economy", "South Asia", "prices"],
  },
  {
    label: "Nepal's Political Landscape",
    source: "The Kathmandu Post",
    imageSrc: "https://en.setopati.com/uploads/posts/Oli-1710241632.jpg",
    keywords: ["Nepal", "politics", "government", "elections"],
  },
  {
    label: "New Hydropower Project Launched",
    source: "MyRepublica",
    imageSrc: "https://ehpl.com.np/wp-content/uploads/2021/12/Hydropower.jpg",
    keywords: ["hydropower", "energy", "Nepal", "infrastructure"],
  },
  {
    label: "Nepal's Political Landscape",
    source: "The Kathmandu Post",
    imageSrc: "https://en.setopati.com/uploads/posts/Oli-1710241632.jpg",
    keywords: ["Nepal", "politics", "government", "elections"],
  },
  {
    label: "Inflation Rises in South Asia",
    source: "Himalayan Times",
    imageSrc:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/inflationweb-1681912076.jpg",
    keywords: ["inflation", "economy", "South Asia", "prices"],
  },
  {
    label: "New Hydropower Project Launched",
    source: "MyRepublica",
    imageSrc: "https://ehpl.com.np/wp-content/uploads/2021/12/Hydropower.jpg",
    keywords: ["hydropower", "energy", "Nepal", "infrastructure"],
  },
  {
    label: "Inflation Rises in South Asia",
    source: "Himalayan Times",
    imageSrc:
      "https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/inflationweb-1681912076.jpg",
    keywords: ["inflation", "economy", "South Asia", "prices"],
  },
  {
    label: "Nepal's Political Landscape",
    source: "The Kathmandu Post",
    imageSrc: "https://en.setopati.com/uploads/posts/Oli-1710241632.jpg",
    keywords: ["Nepal", "politics", "government", "elections"],
  },
  {
    label: "New Hydropower Project Launched",
    source: "MyRepublica",
    imageSrc: "https://ehpl.com.np/wp-content/uploads/2021/12/Hydropower.jpg",
    keywords: ["hydropower", "energy", "Nepal", "infrastructure"],
  },
];

const summaryPoints = [
  {
    id: 1,
    text: "Hundreds gathered in central Kathmandu to demand greater transparency and accountability from the government.",
  },
  {
    id: 2,
    text: "Protesters included students, civil society members, and activists.",
  },
  {
    id: 3,
    text: "Demonstrators cited concerns over corruption, misuse of public funds, and lack of access to government records.",
  },
  {
    id: 4,
    text: "Slogans and placards called for open data policies and digital transparency reforms.",
  },
];

export default async function Page() {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="pr-4 border-r border-base-300 lg:col-span-2">
          <div className="flex gap-4 items-center mb-2">
            <div className="bg-base-200 text-xs p-1 rounded-sm w-fit text-accent hover:bg-secondary transition-all duration-200">
              BBC News
            </div>
            <div className="text-sm text-accent flex items-center gap-2">
              <FaClock className="text-accent text-xs" /> 02:25 pm
            </div>
          </div>
          <SectionHeading
            size="lg"
            title="Protesters Demand Government Transparency in Kathmandu"
          />
          <div className="w-full  h-auto object-contain  margin-inline-auto ">
            <Image
              width={700}
              height={700}
              alt={"News Image "}
              src="https://en.setopati.com/uploads/posts/Oli-1710241632.jpg"
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="py-4">
            {keywords && (
              <div className="flex flex-wrap gap-1 items-center  w-full">
                {keywords.map((topic) => (
                  <TopicCard
                    key={topic}
                    label={topic}
                    className="shrink-0"
                    size="large"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="py-4 text-lg">
            <SectionHeading title="Summary" size="lg" />

            {summaryPoints.map((point) => (
              <li key={point.id} className="ml-3 mb-1">
                {point.text}
              </li>
            ))}
          </div>

          <div className="py-4">
            <SectionHeading title="4 Articles" />
            <div className="grid gap-4 md:gap-8 grid-cols-1 lg:grid-cols-2 ">
              {" "}
              {headlines.map((headline, index) => (
                <NewsCard
                  key={index}
                  label={headline.label}
                  source={headline.source}
                  imageSrc={headline.imageSrc}
                  keywords={headline.keywords}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 bg-base-200 p-4 pl-5 rounded-md flex flex-col gap-8 h-fit">
          <div>
            <SectionHeading title="Bias Distribution" />

            <BiasDistribution segments={biasData as any} />
          </div>

          <div className="">
            <SectionHeading title="Coverage Details" />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="text-lg font-semibold">News Sources</div>
                <div className="text-lg">4</div>
              </div>
              <div className="flex justify-between">
                <div className="text-lg font-semibold">Bias Distribution</div>
                <div className="text-lg">59% Left</div>
              </div>

              <div className="flex justify-between">
                <div className="text-lg font-semibold">Clickbait Index</div>
                <div className="text-lg">0.89</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
