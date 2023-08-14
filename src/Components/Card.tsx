import { Pokemon } from "../Interfaces/individualPokemon";

interface CardProps {
  pokemon: Pokemon | undefined;
}

const Card = (props: CardProps) => {
  return (
    <div className="d-flex card text-bg-dark align-content-center justify-content-between">
      <img
        src={props?.pokemon?.sprites?.other?.["official-artwork"].front_default}
        className="card-img"
        alt="Pokemon"
      />
      <div className="d-flex card-img-overlay justify-content-between">
        <h5 className="card-title text-uppercase">{props.pokemon?.name}</h5>
        <p className=" card-text text-uppercase bg-warning ">
          Types:
          {props?.pokemon?.types.map((item, i) => {
            const { type } = item;
            return <div key={i}> - {type.name}</div>;
          })}
        </p>
      </div>
    </div>
  );
};
export default Card;
