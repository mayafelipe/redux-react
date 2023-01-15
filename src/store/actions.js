import axios from "axios";
import { ERROR_USERS, FETCH_USERS, SUCC_USERS } from "./actionTypes";

export const fetchData = () => {
  return {
    type: FETCH_USERS
  };
};
export const fetchDataSucc = (character) => {
  return {
    type: SUCC_USERS,
    payload: character
  };
};
export const fetchDataError = (error) => {
  return {
    type: ERROR_USERS,
    payload: error
  };
};
const fetchUser = (searchParam = "") => {
  return (dispatch) => {
    dispatch(fetchData());
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchParam}`)
      .then((response) => {
        dispatch(fetchDataSucc([response.data.results]));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
};

export default fetchUser;
