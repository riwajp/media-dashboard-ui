import HeadlineCard from "@/components/cards/HeadlineCard";
import SectionHeading from "@/components/SectionHeading";

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

export default async function Page() {
  try {
    return (
      <div className="flex flex-col gap-12">
        <div className="px-6">
          <SectionHeading title="Today's Headlines" />
          <div className="grid gap-16 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
            {" "}
            {headlines.map((headline, index) => (
              <HeadlineCard
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
    );
  } catch (error: any) {
    console.log("Error fetching outlets data:", error);
    return <div></div>;
  }
}
