import { useEffect, useState } from "react";
import { Pokemon } from "../../Interfaces/individualPokemon";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";
import { CPagination, CPaginationItem } from "@coreui/react";

const Home = () => {
  const [pageData, setPageData] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setPageData([]);
    if (currentPage >= 0) {
      fetchListOfPokemon(currentPage);
    }
    setLoader(false);
  }, [currentPage]);

  const fetchListOfPokemon = async (currentPage: number) => {
    try {
      setPageData([]);
      const init = (currentPage - 1) * 20 + 1;
      for (let i = init; i <= currentPage * 20; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await res.json();
        setPageData((state) => {
          state = [...state, pokemon];
          return state;
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <h1>Home</h1>
      {loader
        ? "... loading"
        : pageData?.map((pokemon, i) => {
            return (
              <div
                key={i}
                className="d-flex align-items-center align-content-center "
              >
                <Link to={`/details/${pokemon.id}`}>
                  <Card pokemon={pokemon} />
                </Link>
              </div>
            );
          })}
      <footer>
        <CPagination aria-label="Page navigation example">
          <CPaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </CPaginationItem>
          <CPaginationItem>{currentPage}</CPaginationItem>
          <CPaginationItem>{currentPage + 1}</CPaginationItem>
          <CPaginationItem>{currentPage + 2}</CPaginationItem>
          <CPaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </CPaginationItem>
        </CPagination>
      </footer>
      <p>Pagina : {currentPage}</p>
      <button onClick={handlePage}>Next Page</button>
    </>
  );
};
export default Home;
