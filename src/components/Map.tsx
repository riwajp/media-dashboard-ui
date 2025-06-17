// components/NepalMap.tsx
"use client";

import Map, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const NepalMap = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 85.324, // Kathmandu
          latitude: 27.7172,
          zoom: 6,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
};

export default NepalMap;
