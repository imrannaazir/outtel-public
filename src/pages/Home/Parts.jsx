import axios from "axios";
import React, { useEffect, useState } from "react";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    (async function () {
      const { data } = await axios.get("http://localhost:5000/parts");
      const parts = data.slice(0, 3);
      setParts(parts);
    })();
  }, []);
  return (
    <div id="parts">
      {parts.map((part, i) => (
        <Part key={i} i={i} part={part} />
      ))}
    </div>
  );
};

export default Parts;
