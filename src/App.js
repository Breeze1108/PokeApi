import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCard from "./Pages/PokemonCard";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const pokemon = await axios.get(
          "http://localhost:3000/catch/all-pokemons"
        );
        setPokemonList(pokemon.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="pokedexContainer">
      <h1>Pokedex</h1>
      {loading ? (
        <h1>Pokedex Loading Pokemon..." </h1>
      ) : (
        pokemonList.map((pokemon) => <PokemonCard pokemon={pokemon}/>)
      ) }
    </div>
  );
}

export default App;
