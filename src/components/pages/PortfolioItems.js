import React from "react";
import groupiepng from "../../assets/groupiegang.png";
import historwepng from "../../assets/historwe.png";
import jatepng from "../../assets/jate.png";

export default function PortItems() {
  const items = [
    {
      name: "HistorWe",
      description: "Social Media for history nerds!",
      image: historwepng,
      url: "",
    },
    {
      name: "Groupie Gang",
      description: "Get the details on your favorite band's tour!",
      image: groupiepng,
      url: "",
    },
    {
      name: "JATE",
      description: "Just another text editor",
      image: jatepng,
      url: "",
    },
  ];
  return (
    <div className="list-group-item">
      {items.map((item, index) => (
        <div key={index}>
          <a href={item.url}>
          <img src={item.image} alt="screenshot of app" width="500" height="600" />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
