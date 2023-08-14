import { useParams } from "react-router-dom";
import CardDet from "../../Components/CardDetail";
import { Pokemon } from "../../Interfaces/individualPokemon";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Details = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [load, setLoad] = useState(false);
  console.log("Loader status in pull false", load);

  const pullData = async () => {
    try {
      setLoad(true);
      console.log("Loader status in pull true", load);
      setTimeout(() => {}, 5000);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      setLoad(true);
      pullData();
      console.log("Loader status in pull false", load);
    } catch (error) {
      console.error(error);
    } finally {
      setLoad(false);
    }
  }, [id]);

  return (
    <>
      {/*         <div className={`align-content-center placeholder-glow`}>
          <h1 className={`${loading}`} onMouseOver={() => setLoading("")}>
            Details
          </h1>
          <p className={`${loading} w-100`}></p>
        </div> */}
      {load ? <Loader /> : <CardDet pokemon={pokemon} />}
    </>
  );
};
export default Details;
