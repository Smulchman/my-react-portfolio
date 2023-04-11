import React from "react";

export default function PortItems() {
  const items = [
    {
      name: "HistorWe",
      description: "Social Media for history nerds!",
    },
    {
      name: "Groupie Gang",
      description: "Get the details on your favorite bands tour!",
    },
  ];
  return (
    <div className="list-group-item">
      {items.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
