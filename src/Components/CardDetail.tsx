import { CContainer, CRow, CCol } from "@coreui/react";
import { Pokemon } from "../Interfaces/individualPokemon";
import { useState } from "react";

interface CardProps {
  pokemon: Pokemon | undefined;
}
const CardDet = (props: CardProps) => {
  const [placeholder, setPlaceholder] = useState<string>("placeholder");
  //const { name, weight, moves, types } = props;
  return (
    <CContainer className="placeholder-glow">
      <CRow id="image">
        <CCol sm={1} />
        <CCol sm={10} className="border rounded-top border-dark">
          <img
            src={
              props.pokemon?.sprites.other?.["official-artwork"].front_default
            }
            className={`card-img rounded-circle bg-warning w-100 h-100 border border-dark ${placeholder}`}
            onLoad={() => setPlaceholder("")}
            alt="Pokemon"
          />
        </CCol>
        <CCol sm={1} />
      </CRow>
      <CRow id="body">
        <CCol sm={1} />
        <CCol sm={3} className="border border-dark text-center">
          STATS:
          <br /> <br />
          <p className={`${placeholder}`}>Height: {props.pokemon?.height}</p>
          <p>Weight: {props.pokemon?.weight}</p>
          <p>
            Types:
            {props.pokemon?.types.map((type, i) => {
              return (
                <p key={i} className="text-uppercase">
                  - {type.type.name}
                </p>
              );
            })}{" "}
          </p>
        </CCol>
        <CCol sm={7} className="border border-dark text-center">
          MOVES
          <br /> <br />
          {props.pokemon?.moves.map((moves, i) => {
            return (
              <span key={i} className="text-capitalize">
                {i + 1}. {moves.move.name} .
              </span>
            );
          })}
        </CCol>
        <CCol sm={1} />
      </CRow>
    </CContainer>
  );
};
export default CardDet;
