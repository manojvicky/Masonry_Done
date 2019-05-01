import Main from "./Main";
import { connect } from "react-redux";
import { ImageshitApi } from "../../actions";
import { withRouter } from "react-router-dom";
export default withRouter(
  connect(
    (state, ownProps) => {
      return {
        allState: state["IMAGES_URL"][ownProps.data.id] || {}
      };
    },
    dispatch => {
      return {
        ImageURLAction: payload => dispatch(ImageshitApi(payload))
      };
    }
  )(Main)
);
