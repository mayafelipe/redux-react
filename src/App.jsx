import "./styles.css";
import { connect } from "react-redux";
import { fetchData } from "./store/actions";
import CharacterList from "./components/CharacterList";
import Instructions from "./components/Instructions";
import Search from "./components/Search";

function App(props) {
  return (
    <div className="App">
      <Instructions />
      <Search />
      <CharacterList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
