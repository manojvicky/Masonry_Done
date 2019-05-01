import { combineReducers } from "redux";
const commonUrlReducer = "IMAGES_URL";
function chooseColor(number) {
  switch (number) {
    case 0:
      return "#92b7bc";
    case 1:
      return "#b2a87f";
    case 2:
      return "#d5baa8";
    case 3:
      return "#e0a9bf";
    case 4:
      return "#ffa269";
    case 5:
      return "#6ccb99";
    case 6:
      return "#a677a6";
    case 7:
      return "#9695d3";
    case 8:
      return "#ff6c11";
    case 9:
      return "#ffb700";
    default:
      return "#c66683";
  }
}
function randomGenerator(data) {
  return data.map(image => {
    let random = Math.random() * 3;
    const height = `${Math.round(random > 1 ? random * 100 : 200)}px`;
    image.height = height;
    image.background = chooseColor(Math.round(Math.random() * 9));
    image.radius = chooseColor(Math.round(Math.random() * 9));
    return image;
  });
}
function data(state = [], action) {
  if (action.type === "dataAction") {
    return [...randomGenerator(action.data)];
  }
  return state;
}
function loading(state = false, action) {
  if (action.type === "loading") {
    return action.loading;
  }
  return state;
}
const appInitalState = { data: [], loading: false, checkBox: "fixedChecked" };
function appReducer(state = appInitalState, action) {
  switch (action.type) {
    case "dataAction":
      return { ...state, data: data(state.data, action) };
    case "loading":
      return { ...state, loading: loading(state.loading, action) };
    case "checkBox":
      return { ...state, checkBox: action.value };
    case "CLEAR":
      return appInitalState;
    default:
      return state;
  }
}
const initalStateForCommonImageURLS = {
  imageURL: "",
  loading: false
};
function commonImageURLS(state = initalStateForCommonImageURLS, action) {
  switch (action.type) {
    case "imageURLApiHit":
      return {
        ...state,
        imageURL: action.URL
      };
    case "loadingImages":
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}
const commonReducerInitalState = {};
function imagesURL(commonName) {
  return function(state = commonReducerInitalState, action) {
    const name = commonName;
    const { id = "" } = action;
    if (id.includes(name)) {
      const nameOfComponent = id.split(name)[1];
      return {
        ...state,
        [nameOfComponent]: commonImageURLS(state[nameOfComponent], action)
      };
    }
    if (action.type === "CLEAR") {
      return commonReducerInitalState;
    }
    return state;
  };
}
const app = combineReducers({
  app: appReducer,
  [commonUrlReducer]: imagesURL(commonUrlReducer)
});
export default app;
