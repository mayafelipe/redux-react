import { ERROR_USERS, FETCH_USERS, SUCC_USERS } from "./actionTypes";

const initialState = {
  characters: [],
  loading: false,
  error: ""
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true
      };
    case SUCC_USERS:
      return {
        loading: false,
        characters: action.payload,
        error: ""
      };
    case ERROR_USERS:
      return {
        loading: false,
        characters: [],
        error: action.payload
      };
    default: {
      return state;
    }
  }
}
