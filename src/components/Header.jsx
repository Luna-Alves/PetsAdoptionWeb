import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const logoUrl = "src/images/petAdoption_logo3.svg";

  return (
    <header>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <img src={logoUrl} width="100" height="70" alt="Logo" />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
