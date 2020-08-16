export const search = (value) => {
  return {
    type: "SEARCH",
    value: value,
  };
};

export const sort = (value) => {
  return {
    type: value,
    value: value.toLowerCase(),
  };
};

export const getBook = (value) => {
  return {
    type: "BOOK",
    value: value,
  };
};
