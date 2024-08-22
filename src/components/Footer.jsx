import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  const logoUrl = "src/images/petAdoption_logo3.svg";
  return (
    <footer>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-4">
                <img src={logoUrl} width="100" height="70" alt="Logo" />
                <p>
                  Estamos ansiosos pela sua visita. Entra em contato com a
                  gente!
                </p>
              </MDBCol>

              <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Guarabira, PB 58200-000, BR
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-2" />
                  pets_adoption@email.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-2" /> + 01 234 567 88
                </p>
              </MDBCol>

              <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Siga-nos</h6>
                <div>
                  <a href="https://www.instagram.com" className="me-3">
                    <MDBIcon
                      fab
                      icon="instagram"
                      size="lg"
                      style={{ color: "#575b5e" }}
                    />
                  </a>
                  <a href="https://www.facebook.com" className="me-3">
                    <MDBIcon
                      fab
                      icon="facebook"
                      size="lg"
                      style={{ color: "#575b5e" }}
                    />
                  </a>
                  <a href="https://www.google.com" className="me-3">
                    <MDBIcon
                      fab
                      icon="google"
                      size="lg"
                      style={{ color: "#575b5e" }}
                    />
                  </a>
                  <a href="https://www.x.com" className="me-3">
                    <MDBIcon
                      fab
                      icon="twitter"
                      size="lg"
                      style={{ color: "#575b5e" }}
                    />
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright
        </div>
      </MDBFooter>
    </footer>
  );
};

export default Footer;
