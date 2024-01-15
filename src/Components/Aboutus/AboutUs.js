import React, { useState } from "react";
import "./AboutUs.css";
import Data from "./Data";

function AboutUs() {
  const [currentData, setCurrentData] = useState(Data);

  const expandArea = (idx) => {
    setCurrentData((prevData) => {
      return prevData.map((item, i) => {
        if (i === idx) {
          return { ...item, expanded: !item.expanded };
        }
        return { ...item, expanded: false };
      });
    });
  };

  return (
    <main>
      <section className="about">
        {currentData.map((item, idx) => (
          <div
            key={idx}
            className={`sector ${item.expanded ? "expanded" : ""}`}
          >
            <div className="heading" onClick={() => expandArea(idx)}>
              <h3>{item.heading}</h3>
              <button>{(item.expanded) ? "➖" : "➕"}</button>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default AboutUs;
