import React from "react";
import Image from "next/image";

type BiasBlock = {
  role: "leading" | "neutral" | "opposition";
  percentage: number;
  color: string;
  sources: {
    id: string;
    label: string;
    imageSrc: string;
  }[];
};

type BiasDistributionProps = {
  segments: BiasBlock[];
};

const segments = [
  {
    role: "leading",
    percentage: 45,
    color: "bg-red-500",
    sources: [
      {
        id: "TKP",
        label: "The Kathmandu Post",
        imageSrc:
          "https://tendernotice.com.np/images/TheKathmanduPost.png?_debugResources=y&n=1748976238281",
      },
      {
        id: "Ratopati",
        label: "Ratopati",
        imageSrc:
          "https://npcdn.ratopati.com/media/setting/ratopati-logo_rpYvtHpSAH.png",
      },
    ],
  },
  {
    role: "neutral",
    percentage: 30,
    color: "bg-blue-500",
    sources: [
      {
        id: "BBC",
        label: "BBC News",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKl7Ijh5CSKj6oQaVDsS67cnnLJ9NA74t8w&s",
      },
      {
        id: "THT",
        label: "The Himalayan Times",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnIZ9wYAJ-2ZblcXNiyyZ7zoYSqoJHm4_iw&s",
      },
    ],
  },
  {
    role: "opposition",
    percentage: 25,
    color: "bg-green-500",
    sources: [
      {
        id: "OnlineKhabar",
        label: "Online Khabar",
        imageSrc:
          "https://play-lh.googleusercontent.com/7fQNxv7HXXzN8SivPrNCxvK6Wii_VcKmvyGUvXDlGumOaBOxeFPOAk1zZ2BrWzW3TQ",
      },
      {
        id: "Setopati",
        label: "Setopati",
        imageSrc: "https://www.setopati.com/logo.png",
      },
    ],
  },
];

const verticalBars = [
  {
    role: "leading",
    color: "bg-red-500",
    sources: [
      {
        id: "TKP",
        label: "The Kathmandu Post",
        imageSrc:
          "https://tendernotice.com.np/images/TheKathmanduPost.png?_debugResources=y&n=1748976238281",
      },
      {
        id: "Ratopati",
        label: "Ratopati",
        imageSrc:
          "https://npcdn.ratopati.com/media/setting/ratopati-logo_rpYvtHpSAH.png",
      },
    ],
  },
  {
    role: "leading",
    color: "bg-red-500",
    sources: [
      {
        id: "NepalLive",
        label: "Nepal Live",
        imageSrc: "https://nepallive.com/images/logo.png",
      },
      {
        id: "Gorkhapatra",
        label: "Gorkhapatra",
        imageSrc: "https://gorkhapatraonline.com/assets/images/logo.png",
      },
    ],
  },
  {
    role: "neutral",
    color: "bg-blue-500",
    sources: [
      {
        id: "BBC",
        label: "BBC News",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKl7Ijh5CSKj6oQaVDsS67cnnLJ9NA74t8w&s",
      },
      {
        id: "THT",
        label: "The Himalayan Times",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnIZ9wYAJ-2ZblcXNiyyZ7zoYSqoJHm4_iw&s",
      },
    ],
  },
  {
    role: "opposition",
    color: "bg-green-500",
    sources: [
      {
        id: "OnlineKhabar",
        label: "Online Khabar",
        imageSrc:
          "https://play-lh.googleusercontent.com/7fQNxv7HXXzN8SivPrNCxvK6Wii_VcKmvyGUvXDlGumOaBOxeFPOAk1zZ2BrWzW3TQ",
      },
      {
        id: "Setopati",
        label: "Setopati",
        imageSrc: "https://www.setopati.com/logo.png",
      },
    ],
  },
  {
    role: "opposition",
    color: "bg-green-500",
    sources: [
      {
        id: "Nagarik",
        label: "Nagarik News",
        imageSrc: "https://nagariknews.nagariknetwork.com/images/logo.png",
      },
      {
        id: "JanataTimes",
        label: "Janata Times",
        imageSrc:
          "https://www.janatatimes.com/wp-content/uploads/2021/06/Janata-Times-logo.png",
      },
    ],
  },
];

const BiasDistribution: React.FC<BiasDistributionProps> = ({}) => {
  return (
    <div className="w-full">
      {/* Horizontal bias bar */}
      <div className="flex h-6 w-full">
        {segments.map((seg, index) => (
          <div
            key={index}
            className={`${seg.color} text-xs text-white text-center p-1 truncate`}
            style={{ width: `${seg.percentage}%` }}
            title={`${seg.role.toUpperCase()} - ${seg.percentage}%`}
          >
            {`${seg.percentage}%`}
          </div>
        ))}
      </div>

      {/* Vertical 5 stacked bars with multiple sources each */}
      <div className="mt-2 flex justify-between h-48">
        {verticalBars.map((bar, index) => (
          <div
            key={index}
            className="p-2 rounded-full flex flex-col items-center justify-end gap-1 bg-base-300"
            title={bar.role.toUpperCase()}
          >
            {bar.sources.map((source) => (
              <div
                key={source.id}
                className="w-8 h-8 rounded-full overflow-hidden border border-white shadow"
              >
                <Image
                  src={source.imageSrc}
                  alt={source.label}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiasDistribution;
