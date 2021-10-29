import user from "./user";
import contacts from "./contacts";

import { combineReducers } from "redux";

const reducers = combineReducers({
  user,
  contacts,
});

export default reducers;
