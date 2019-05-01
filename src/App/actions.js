export function hitApi(url) {
  return function(dispatch) {
    dispatch({ type: "loading", loading: true });
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "loading", loading: false });
        dispatch({ type: "dataAction", data: data.photos.photo });
      })
      .catch(err => console.log("error", err));
  };
}

export function ImageshitApi(payload) {
  return function(dispatch) {
    dispatch({
      type: "loadingImages",
      id: `IMAGES_URL${payload.id}`,
      loading: true
    });
    fetch(payload.url)
      .then(res => res.blob())
      .then(data => {
        dispatch({
          type: "imageURLApiHit",
          id: `IMAGES_URL${payload.id}`,
          URL: URL.createObjectURL(data)
        });
        dispatch({
          type: "loadingImages",
          id: `IMAGES_URL${payload.id}`,
          loading: false
        });
      })
      .catch(err => console.log("error", err));
  };
}
