import searchReducer from "./search";
import sortReducer from "./sort";
import bookReducer from "./book";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  search: searchReducer,
  sort: sortReducer,
  book: bookReducer,
});

export default allReducer;
