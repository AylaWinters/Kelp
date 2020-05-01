import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import aquariums from "./aquariums";

export default combineReducers({
  alert,
  auth,
  profile,
  aquariums,
});
