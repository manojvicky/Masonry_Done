import { connect } from "react-redux";
import SingleImage from "./SingleImage";
export default connect((state, ownProps) => {
  const data = state.app.data.filter(
    image => image.id === ownProps.match.params.id
  );
  const url = state.IMAGES_URL[ownProps.match.params.id];
  return {
    data: (data && data[0]) || [],
    imageURL: (url && url.imageURL) || ""
  };
})(SingleImage);
