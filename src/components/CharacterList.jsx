import React from "react";
import { useSelector } from "react-redux";
import { ListStyle } from "./styles";

export default function CharacterList(props) {
  const search = useSelector((state) => state.search);

  return (
    <ListStyle>
      {search.loading && <div>Loading...</div>}
      {search.characters[0] &&
        search.characters[0].map((item) => <li key={item.id}>{item.name}</li>)}
      {search.error && <div>No name found</div>}
    </ListStyle>
  );
}
