import React from "react";
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { validateUserName, ValidatePassWord } from "../../Auth/Auth";
import { setUser } from "../../LocalStorage";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      userNameError: "",
      passWordError: ""
    };
  }
  handleUsername = e => {
    this.setState({
      userName: e.target.value
    });
  };
  handlePassword = e => {
    this.setState({
      passWord: e.target.value
    });
  };
  handleClick = () => {
    const { userName, passWord } = this.state;
    let userState = validateUserName(userName);
    let passState = ValidatePassWord(passWord);
    if (userState.status && passState.status) {
      setUser({ email: userName, password: passWord });
      this.props.history.push("/");
    } else {
      this.setState({
        userNameError: userState.message,
        passWordError: passState.message
      });
    }
  };
  render() {
    const alignMent = {
      xl: { span: 6, offset: 3 },
      lg: { span: 6, offset: 3 },
      md: { span: 8, offset: 2 },
      sm: { span: 8, offset: 2 },
      xs: { span: 10, offset: 1 }
    };
    return (
      <div style={{ height: "100%" }}>
        <Header />
        <div className="login" style={{ position: "relative", top: "50px" }}>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col {...alignMent} style={{ marginBottom: "10px" }}>
                    <input
                      className="loginButton"
                      type="text"
                      placeholder="username"
                      onChange={this.handleUsername}
                    />
                    <div className="error">
                      {this.state.userNameError ? (
                        <span>{this.state.userNameError}</span>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col {...alignMent} style={{ marginBottom: "10px" }}>
                    <input
                      className="loginButton"
                      type="password"
                      placeholder="password"
                      onChange={this.handlePassword}
                    />
                    <div className="error">
                      {this.state.passWordError ? (
                        <span>{this.state.passWordError}</span>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col {...alignMent}>
                    <button
                      className="loginButton"
                      onClick={this.handleClick}
                      disabled={!this.state.userName || !this.state.passWord}
                    >
                      Login
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Login;
