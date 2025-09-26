import React from "react";
import { WorldMap } from "react-svg-worldmap";

export default function Storefronts() {
  const data = [{ country: "in", value: 6111 }]; // "in" = India

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Storefronts</h3>
        <div className="flex gap-3 text-gray-400">
          <button className="p-1 rounded hover:bg-gray-100">🌐</button>
          <button className="p-1 rounded hover:bg-gray-100">📊</button>
          <button className="p-1 rounded hover:bg-gray-100">⛶</button>
          <button className="p-1 rounded hover:bg-gray-100">⚙️</button>
        </div>
      </div>

      <div className="rounded border p-3">
        <div className="h-64">
          <WorldMap
            color="orange"
            size="responsive"
            data={data}
            valueSuffix="k"
          />
        </div>
      </div>
    </div>
  );
}
