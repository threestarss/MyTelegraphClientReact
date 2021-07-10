import { bindActionCreators } from "redux";
import { store } from "../Store/store";
import {
  UserInfoActionPayload,
  UserInfoActionObject,
} from "../Store/actionTypes";

function userLogin(payload: UserInfoActionPayload): UserInfoActionObject {
  return { type: "LOGIN", payload };
}

function userLogout(payload: UserInfoActionPayload): UserInfoActionObject {
  return { type: "LOGOUT", payload };
}

function setScrollPos(payload: number) {
  return { type: "SET_SCROLL_POS", payload };
}

export const userActions = bindActionCreators({}, store.dispatch);
