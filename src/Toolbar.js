import { useEffect } from "react";

export default function Toolbar({ showToolbar, xCoord, yCoord }) {
  useEffect(() => {
    console.log(xCoord);
  });

  return (
    <div
      id="toolbar"
      style={{
        display: `${showToolbar ? "flex" : "none"}`,
        left: xCoord,
        top: yCoord,
      }}
    >
      <button className="ql-bold">B</button>
      <button className="ql-italic">I</button>
      <button className="ql-link">A</button>
      <button className="ql-code">Code</button>
      <button className="ql-code-block">CodeB</button>
      <button className="ql-list">List</button>
      <button className="ql-header" value="3" type="button">
        H3
      </button>
      <button className="ql-header" value="4" type="button">
        H4
      </button>
    </div>
  );
}
