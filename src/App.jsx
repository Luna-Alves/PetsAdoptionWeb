import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Container>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  );
}

export default App;
