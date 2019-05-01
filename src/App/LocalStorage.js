export function loadUser() {
  try {
    const user = localStorage.getItem("user");
    if (JSON.parse(user)) {
      return true;
    }
    return;
  } catch (error) {
    console.log("error while loading from local state", error);
  }
}
export function setUser(user) {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log("error while setting local state", error);
  }
}
