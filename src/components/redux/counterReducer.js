const counterReducer = (state = 0, action) => {
  if (action.type === "inc") {
    return state + 1;
  }
  if (action.type === "dec") {
    return state - 1;
  }
  return state;
};

export default counterReducer;
