import React from "react";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class SingleImage extends React.Component {
  componentWillMount() {
    if (this.props.data.length === 0) {
      this.props.history.push("/F0F");
    }
  }
  render() {
    const { data } = this.props;
    const sm = { span: 10, offset: 1 };
    const xs = { span: 12, offset: 0 };
    const common = { span: 6, offset: 0 };
    return (
      <div
        style={{ height: "100%", position: "absolute", width: "100%" }}
        className="App"
      >
        <Header buttons home />
        <div
          className="backButton"
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          Back
        </div>
        <div className="SingleImage">
          <Container fluid>
            <Row>
              <Col xl={common} lg={common} md={common} sm={sm} xs={xs}>
                <img
                  style={{ width: "100%" }}
                  src={this.props.imageURL}
                  alt={this.props.title}
                />
              </Col>
              <Col xl={common} lg={common} md={common} sm={sm} xs={xs}>
                <div className="outer">
                  <div>
                    <div className="labels">Title: </div>
                    <span>{data.title}</span>
                  </div>
                  <div>
                    <div className="labels">Owner: </div>
                    <span>{data.ownername}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default SingleImage;
