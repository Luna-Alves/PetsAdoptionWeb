import { Button, Card, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./ServicosCard.css";

const ServicosCard = ({ servicos = [] }) => {
  return (
    <Row className="p-2">
      {servicos.map((servico, i) => {
        return (
          <Col key={i}>
            <Card>
              <Card.Img variant="top" src={servico.imageUrl} />
              <Card.Body>
                <Card.Title>{servico.title}</Card.Title>
                <Card.Text>{servico.description}</Card.Text>
                <Button variant="primary">Acessar</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

ServicosCard.propTypes = {
  servicos: PropTypes.array,
};

export default ServicosCard;
