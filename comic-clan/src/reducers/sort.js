const sortReducer = (state = "", action) => {
  switch (action.type) {
    case "YEAR":
      return "year";
    case "WRITER":
      return "writer";
    case "ARTIST":
      return "artist";
    case "OWNER":
      return "owner";
    case "RANDOM":
      return "random";
    default:
      return "year";
  }
};

export default sortReducer;
