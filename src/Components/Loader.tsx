import { CContainer, CRow, CCol } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Loader = () => {
  return <h1>We are waiting for this to load</h1>;
  {
    /* <>
      <h1>Loading</h1>
      <CContainer className="placeholder-glow">
        <CRow id="image" className="placeholder">
          <CCol sm={1} className="placeholder" />
          <CCol sm={10} className="border rounded-top border-dark">
            <img
              className="card-img rounded-circle bg-warning w-100 h-100 border border-dark placeholder"
              alt="Pokemon"
            />
          </CCol>
          <CCol sm={1} className="placeholder" />
        </CRow>
        <CRow id="body" className="placeholder">
          <CCol sm={1} />
          <CCol sm={3} className="border border-dark text-center placeholder">
            STATS:
            <br /> <br />
            <p>Height: </p>
            <p>Weight: </p>
            <p>Types:</p>
          </CCol>
          <CCol sm={7} className="border border-dark text-center placeholder">
            MOVES
            <br /> <br />
          </CCol>
          <CCol sm={1} className="placeholder" />
        </CRow>
      </CContainer>
    </> */
  }
};

export default Loader;
