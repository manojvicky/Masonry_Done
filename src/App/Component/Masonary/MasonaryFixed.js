import React from "react";
import Main from "./Main.container";

const Masonary = ({ columns, gap, data = [] }) => {
  let columnObj = {};
  const newArr = [];
  for (let j = 0; j < columns; j++) {
    columnObj[`column${j}`] = [];
  }
  for (let i = 0; i < data.length; i++) {
    let index = i % columns;

    const divElement = (
      <div
        className="eachDiv"
        key={data[i].id}
        style={{
          marginBottom: `${gap}px`,
          width: gap > 1 ? "200px" : "100%",
          height: data[i].height,
          background: data[i].background,
          borderRadius: data[i].radius
        }}
      >
        <Main data={data[i]} height={data[i].height} key={data[i].id} />
      </div>
    );
    columnObj[`column${index}`].push(divElement);
  }
  for (let j = 0; j < columns; j++) {
    const columnDiv = (
      <div
        className="columnDiv"
        style={{ marginRight: j < columns - 1 ? `${gap}px` : "0px" }}
        key={j}
      >
        {columnObj[`column${j}`].map(item => item)}
      </div>
    );
    newArr.push(columnDiv);
  }
  return <div className="masonaryParent">{newArr.map(item => item)}</div>;
};
export default Masonary;
