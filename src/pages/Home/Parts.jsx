import React from "react";
import Part from "./Part";

const Parts = () => {
  const parts = ["1", "2", "3"];
  return (
    <div id="parts">
      {parts.map((part, i) => (
        <Part key={i} i={i} />
      ))}
    </div>
  );
};

export default Parts;
