import { createStore } from "redux";
import reducers from "../reducers/contacts";

const store = createStore(reducers);

export default store;
