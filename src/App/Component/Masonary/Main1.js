import React from "react";
import Spinner from "react-bootstrap/Spinner";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      image: ""
    };
  }
  componentDidMount() {
    const { farm, server, id, secret, height } = this.props;
    this.setState({ loading: true });
    fetch(`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`)
      .then(res => res.blob())
      .then(data =>
        this.setState({ image: URL.createObjectURL(data), loading: false })
      );
  }
  render() {
    const { height } = this.props;
    return (
      <div className="MainDiv">
        {this.state.loading ? (
          <Spinner animation="grow" />
        ) : (
          <div
            style={{
              backgroundImage: `url(${this.state.image})`,
              height: `${height}`,
              width: "100%"
            }}
          />
        )}
      </div>
    );
  }
}
export default Main;
