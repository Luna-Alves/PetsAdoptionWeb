import { Carousel, Container, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Carrossel.css";

const Carrossel = ({ carouselItems = [] }) => {
  return (
    <Container fluid="sm" className="p-2">
      <Carousel controls={false}>
        {carouselItems.map((item, i) => {
          return (
            <Carousel.Item key={i}>
              <Image fluid src={item.imageUrl} />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

Carrossel.propTypes = {
  carouselItems: PropTypes.array,
};

export default Carrossel;
