const bookReducer = (state = "", action) => {
  switch (action.type) {
    case "BOOK":
      return action.value;
    default:
      return state;
  }
};

export default bookReducer;
