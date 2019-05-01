import React from "react";
import Header from "./Component/Header/Header";

class F0F extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Header buttons home />
        <div
          className="errorPage"
          style={{ position: "relative", top: "50px" }}
        >
          <h2>Error: 404: Page Not Found</h2>
        </div>
      </div>
    );
  }
}
export default F0F;
