import React from "react";
import Main from "./Main.container";

class Masonary extends React.Component {
  constructor(props) {
    super(props);
    this.myInnerDiv = React.createRef();
  }

  componentDidMount() {
    if (this.myInnerDiv && this.myInnerDiv.current) {
      this.height = `${this.myInnerDiv.current.clientWidth}px`;
    }
  }
  componentDidUpdate() {
    if (this.myInnerDiv && this.myInnerDiv.current) {
      this.height = `${this.myInnerDiv.current.clientWidth}px`;
    }
  }
  render() {
    const { columns, gap, data = [] } = this.props;
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
          ref={this.myInnerDiv}
          key={data[i].id}
          style={{
            marginBottom: `${gap}px`,
            width: "100%",
            height: this.height ? `${this.height}` : `${data[i].height}`,
            background: data[i].background
          }}
        >
          <Main
            data={data[i]}
            height={this.height ? this.height : data[i].height}
            key={data[i].id}
          />
        </div>
      );
      columnObj[`column${index}`].push(divElement);
    }
    for (let j = 0; j < columns; j++) {
      const columnDiv = (
        <div
          className="columnDiv"
          style={{
            width: columns === 1 ? "60%" : "100%",
            marginRight: j < columns - 1 ? `${gap}px` : "0px"
          }}
          key={j}
        >
          {columnObj[`column${j}`].map(item => item)}
        </div>
      );
      newArr.push(columnDiv);
    }
    return <div className="masonaryParent">{newArr.map(item => item)}</div>;
  }
}
export default Masonary;
