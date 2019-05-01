import React from "react";
import { withRouter } from "react-router-dom";
import { setUser } from "../../LocalStorage";
import { connect } from "react-redux";
const Header = props => {
  const { buttons, history, home } = props;
  return (
    <div className="header">
      <span className="spanHeader">Masonry</span>
      {buttons && (
        <button
          onClick={() => {
            props.dispatch({ type: "CLEAR" });
            setUser("");
            history.push("/login");
          }}
          className="buttonHeader"
        >
          Logout
        </button>
      )}
      {home && (
        <button
          onClick={() => {
            history.push("/");
          }}
          className="buttonHeader"
        >
          Home
        </button>
      )}
    </div>
  );
};
export default withRouter(connect()(Header));
