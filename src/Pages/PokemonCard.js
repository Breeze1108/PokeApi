import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const typeColors = {};

function PokemonCard({ pokemon }) {
  const [loading, setLoading] = useState(false);
  const [pokeDetails, setPokeDetails] = useState({});

  useEffect(() => {
    const setSinglePokemonData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(pokemon.url);
        setPokeDetails(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    setSinglePokemonData();
  }, []);
  return (
    // <>
    // <img src={pokeDetails.data?.sprites.front_default} />
    // {console.log(pokeDetails.data)}
    // {/* </>
    <div id="conatiner">
      <div className="card">
        {/*create these class names in app.css*/}
        <div className="card_image">
          <img src={pokeDetails.data?.sprites.front_default} />
        </div>
        <div className="card_name">{pokeDetails.data?.name}</div>
        <div className="card_type">{pokeDetails.data?.type}</div>

        {/* Card info such as weight height etc */}
        <div className="card_info">
          <div className="card_data_weight">
            <p>Weight</p>
            <p>{pokeDetails.data?.weight}</p>
          </div>
          <div className="card_height">
            <p>Height</p>
            <p>{pokeDetails.data?.height}</p>
          </div>
          <div className="card_ability">
            <p>{pokeDetails.data?.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PokemonCard;
