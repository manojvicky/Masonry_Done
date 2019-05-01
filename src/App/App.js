import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { loadUser } from "./LocalStorage";
import MasonaryFixed from "./Component/Masonary/MasonaryFixed";
import MasonaryResponsive from "./Component/Masonary/MasonaryResponsive";
import MasonaryRsponsiveNFixed from "./Component/Masonary/MasonaryRsponsiveNFixed";
import Header from "./Component/Header/Header";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 400
    };
    this.myRef = React.createRef();
    this.calculateLayout = this.calculateLayout.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }
  calculateLayout() {
    if (this.myRef && this.myRef.current) {
      this.setState({ width: this.myRef.current.clientWidth });
    }
  }
  componentDidMount() {
    if (!loadUser()) {
      return this.props.history.push("/login");
    }
    if (this.props.data.length === 0) {
      this.props.dataAction(
        "https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=55724f35ffe3ae343fcb01284ef8dce4&group_id=2309748%40N20&format=json&nojsoncallback=1"
      );
    }
    if (this.myRef.current && this.myRef.current.clientWidth) {
      window.addEventListener("resize", this.calculateLayout);
      if (this.state.width !== this.myRef.current.clientWidth) {
        this.setState({ width: this.myRef.current.clientWidth });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateLayout);
  }
  handleCheckBox(e) {
    const id = e.target.id;
    this.props.checkBoxAction(id);
    // this.setState({ checkBox: id });
  }

  render() {
    let styleForSpinner = {};
    if (this.props.loading) {
      styleForSpinner = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      };
    }
    const { checkBox } = this.props;
    const fixedChecked = "fixedChecked" === checkBox;
    const responsiveChecked = "responsiveChecked" === checkBox;
    const fixedNresponsiveChecked = "fixedNresponsiveChecked" === checkBox;
    const columns = Math.floor((this.state.width - 50) / 200);
    return (
      <div ref={this.myRef} className="App">
        <Header buttons />
        <div className="loadingMasonary" style={styleForSpinner}>
          {this.props.loading ? (
            <Spinner animation="border" />
          ) : (
            <div>
              <div className="checkboxes">
                <div className="checkbox">
                  <input
                    id="fixedChecked"
                    type="checkbox"
                    onChange={e => this.handleCheckBox(e)}
                    checked={this.props.checkBox === "fixedChecked"}
                  />
                  <label htmlFor="fixedChecked">Fix</label>
                </div>
                <div className="checkbox">
                  <input
                    id="responsiveChecked"
                    type="checkbox"
                    onChange={e => this.handleCheckBox(e)}
                    checked={this.props.checkBox === "responsiveChecked"}
                  />
                  <label htmlFor="responsiveChecked">Res</label>
                </div>
                <div className="checkbox">
                  <input
                    id="fixedNresponsiveChecked"
                    type="checkbox"
                    onChange={e => this.handleCheckBox(e)}
                    checked={this.props.checkBox === "fixedNresponsiveChecked"}
                  />
                  <label htmlFor="fixedNresponsiveChecked">Fix & Res</label>
                </div>
              </div>
              {fixedChecked && (
                <MasonaryFixed
                  gap={10}
                  columns={columns > 0 ? columns : 1}
                  data={this.props.data}
                  width={this.myRef.current}
                />
              )}
              {responsiveChecked && (
                <MasonaryResponsive
                  gap={10}
                  columns={columns > 0 ? columns : 1}
                  data={this.props.data}
                  width={this.myRef.current}
                />
              )}
              {fixedNresponsiveChecked && (
                <MasonaryRsponsiveNFixed
                  gap={10}
                  columns={5}
                  data={this.props.data}
                  width={this.myRef.current}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default App;
