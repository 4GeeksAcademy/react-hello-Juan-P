import React from "react";

export default function Rectangles({ color }) {
  return (
    <section>
      <div>
        <p className="rectangle" style={{ backgroundColor: color }}></p>
      </div>
      <div>
        <p className="rectangle2" style={{ backgroundColor: color }}></p>
      </div>
    </section>
  );
}


