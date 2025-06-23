"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { IoSearch } from "react-icons/io5";
import GraphViewToggle from "@/components/GraphViewToggle";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});
const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), {
  ssr: false,
});

const Graph3D = () => {
  const graphRef = useRef<any>(null);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [keyword, setKeyword] = useState("");
  const [rawData, setRawData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [viewMode, setViewMode] = useState<"2D" | "3D" | "GIS">("3D");

  const containerRef = useRef<any>(null);

  useEffect(() => {
    fetch("/keyword_graph_3d.json")
      .then((res) => res.json())
      .then((data) => setRawData(data))
      .catch((err) => console.error("Error loading graph data:", err));

    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setDimensions({ width: clientWidth, height: clientHeight });
    }
  }, []);

  const handleFilter = () => {
    if (!rawData || !keyword.trim()) return;

    setLoading(true);
    const k = keyword.trim().toLowerCase();
    const relatedNodes = new Set();
    const relatedLinks = [];

    rawData.links.forEach((link) => {
      if (
        link.source.toLowerCase().includes(k) ||
        link.target.toLowerCase().includes(k) ||
        (link.titles && link.titles.some((t) => t.toLowerCase().includes(k)))
      ) {
        relatedNodes.add(link.source);
        relatedNodes.add(link.target);
        relatedLinks.push(link);
      }
    });

    const filteredNodes = rawData.nodes.filter((n) => relatedNodes.has(n.id));
    const topEdges = getTopEdges(
      { nodes: filteredNodes, links: relatedLinks },
      5
    );
    setGraphData({ nodes: filteredNodes, links: topEdges });
    setLoading(false);
  };

  return (
    <div className="px-6 flex flex-col gap-8 h-full justify-between">
      <div className="flex gap-3">
        <div className=" flex gap-1">
          <input
            type="text"
            placeholder="Enter topic..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="rounded-md text-sm bg-base-300 h-10 w-48 px-2"
          />

          <button
            onClick={handleFilter}
            disabled={!rawData || loading}
            className="btn btn-square btn-ghost p-1  rounded-md text-accent text-lg bg-base-300 hover:bg-base-200 min-h-10  h-10 w-10 "
          >
            <IoSearch />
          </button>
        </div>
        <GraphViewToggle
          onTabSwitch={(tab) => setViewMode(tab as "2D" | "3D")}
        />
      </div>

      <div className="w-full h-full grow" ref={containerRef}>
        {viewMode === "3D" ? (
          <ForceGraph3D
            ref={graphRef}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="#0e0d14"
            graphData={graphData}
            nodeAutoColorBy="group"
            nodeLabel={(node: any) => `${node.id}`}
            linkLabel={(link: any) =>
              link.titles?.length
                ? `Titles:\n- ${link.titles.slice(0, 5).join("\n- ")}${
                    link.titles.length > 5 ? "\n..." : ""
                  }`
                : "No associated titles"
            }
            linkWidth={1}
            onLinkClick={(link: any) => {
              console.log("Articles linking", link.source, "and", link.target);
              if (link.titles?.length) console.log("Titles:", link.titles);
            }}
            onNodeDragEnd={(node: any) => {
              node.fx = node.x;
              node.fy = node.y;
              node.fz = node.z;
            }}
          />
        ) : (
          <ForceGraph2D
            ref={graphRef}
            width={dimensions.width}
            height={dimensions.height}
            backgroundColor="#0e0d14"
            graphData={graphData}
            linkColor={(link: any) => {
              return `rgba(0,122,100,0.3)`;
            }}
            nodeLabel={(node: any) => `${node.id}`}
            linkWidth={1}
            onLinkClick={(link: any) => {
              console.log("Articles linking", link.source, "and", link.target);
              if (link.titles?.length) console.log("Titles:", link.titles);
            }}
            onNodeDragEnd={(node: any) => {
              node.fx = node.x;
              node.fy = node.y;
            }}
            nodeCanvasObject={(node: any, ctx, globalScale) => {
              // Calculate node degree (number of links connected)
              const degree = graphData.links.reduce(
                (count, link) =>
                  count +
                  ((link.source.id || link.source) === node.id ||
                  (link.target.id || link.target) === node.id
                    ? 1
                    : 0),
                0
              );

              // Scale radius (min 5, max 20)
              const minRadius = 4;
              const maxRadius = 100;
              const radius = Math.min(
                maxRadius,
                minRadius + degree * 3 // tweak multiplier to fit your data
              );

              // Draw hollow circle
              ctx.beginPath();
              ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI, false);
              // Fill transparent
              ctx.fillStyle = "rgba(0,0,0,0)";
              ctx.fill();
              // Stroke with color similar to 3D node color (use group-based color)
              const color = `hsl(${
                ((node.group || 0) * 137.508) % 360
              }, 70%, 70%)`;
              ctx.strokeStyle = color;
              ctx.lineWidth = 1;
              ctx.stroke();

              // Draw text inside circle if radius is big enough (>12)
              if (radius >= 25) {
                const fontSize = 12 / globalScale; // scale font size with zoom
                ctx.font = `${fontSize}px Sans-Serif`;
                ctx.fillStyle = color;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(node.id, node.x, node.y);
              }
            }}
            nodePointerAreaPaint={(node: any, color, ctx) => {
              // This increases hit area for mouse interactions
              const degree = graphData.links.reduce(
                (count, link) =>
                  count +
                  ((link.source.id || link.source) === node.id ||
                  (link.target.id || link.target) === node.id
                    ? 1
                    : 0),
                0
              );

              const minRadius = 5;
              const maxRadius = 25;
              const radius = Math.min(maxRadius, minRadius + (degree / 2) * 3);

              ctx.fillStyle = color;
              ctx.beginPath();
              ctx.arc(node.x, node.y, radius + 5, 0, 2 * Math.PI, false); // +5 for easier pointer detection
              ctx.fill();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Graph3D;

function getTopEdges(data: any, maxEdgesPerNode = 5) {
  const nodeEdges: Record<string, any[]> = {};

  data.links.forEach((link: any) => {
    const { source, target, weight = link.value || 1 } = link;

    [
      [source, target],
      [target, source],
    ].forEach(([a, b]) => {
      if (!nodeEdges[a]) nodeEdges[a] = [];
      nodeEdges[a].push({ source: a, target: b, weight, titles: link.titles });
    });
  });

  const allTopEdges: any[] = [];
  Object.values(nodeEdges).forEach((edges) => {
    edges.sort((a, b) => (b.weight || 1) - (a.weight || 1));
    allTopEdges.push(...edges.slice(0, maxEdgesPerNode));
  });

  const uniqueEdges: Record<string, any> = {};
  allTopEdges.forEach((link) => {
    const key = [link.source, link.target].sort().join("-");
    if (!uniqueEdges[key]) {
      uniqueEdges[key] = link;
    }
  });

  return Object.values(uniqueEdges);
}
