const scriptReducer = (state = { txt: "", check: [], show: false }, action) => {
  if (action.type === "script") {
    return action.value;
  }
  return state;
};

export default scriptReducer;
