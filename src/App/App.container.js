import App from "./App";
import { connect } from "react-redux";
import { hitApi } from "./actions";
export default connect(
  state => {
    return {
      data: state.app.data,
      loading: state.app.loading,
      checkBox: state.app.checkBox
    };
  },
  dispatch => {
    return {
      dataAction: url => dispatch(hitApi(url)),
      checkBoxAction: value => dispatch({ type: "checkBox", value })
    };
  }
)(App);
