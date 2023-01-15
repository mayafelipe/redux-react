import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchUser from "../store/actions";
import { SearchStyle } from "./styles";

const Search = (props) => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState("");
  return (
    <SearchStyle>
      <input
        type="text"
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(fetchUser(character));
        }}
      >
        Buscar
      </button>
    </SearchStyle>
  );
};
export default Search;
