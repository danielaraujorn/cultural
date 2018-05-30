import { combineReducers } from "redux";
import accounts from "./accountsReducer";

const data = {
  accounts
};

const rootReducer = combineReducers(data);
export default rootReducer;
