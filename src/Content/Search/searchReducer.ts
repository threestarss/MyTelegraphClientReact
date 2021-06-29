import { SearchActionObject } from "../../Store/actionTypes";

export default function searchReducer(state = {}, action: SearchActionObject) {
  switch (action.type) {
    case "SERP_LOADED":
      return action.payload;
    // case "SERP_LOADED_MORE_RESULTS":
    //   return [...state.items]
    default:
      return state;
  }
}
