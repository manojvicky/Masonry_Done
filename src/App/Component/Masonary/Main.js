import React from "react";
import Spinner from "react-bootstrap/Spinner";
class Main extends React.Component {
  componentDidMount() {
    const { farm, server, id, secret } = this.props.data;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    if (!this.props.allState.imageURL) {
      this.props.ImageURLAction({ id, url });
    }
  }
  render() {
    const { height } = this.props;
    return (
      <div className="MainDiv">
        {this.props.allState.loading ? (
          <Spinner animation="grow" />
        ) : (
          <div
            style={{
              backgroundImage: `url(${this.props.allState.imageURL})`,
              height: `${height}`,
              width: "100%",
              borderRadius: "2px",
              cursor: "pointer"
            }}
            onClick={() => {
              this.props.history.push(`/${this.props.data.id}`);
            }}
          />
        )}
      </div>
    );
  }
}
export default Main;
