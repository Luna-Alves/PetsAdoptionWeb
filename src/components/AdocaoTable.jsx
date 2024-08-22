import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import animais from "../datassets/Animais";

const AdocaoTable = () => {
  return (
    <div>
      <h4 className="text-center my-4">Animais disponíveis para adoção</h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Raça</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {animais.map((animal) => {
            return (
              <tr key={animal.name}>
                <td>{animal.name}</td>
                <td>{animal.age}</td>
                <td>{animal.animalBreed}</td>
                <td>{animal.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

AdocaoTable.propTypes = {
  animais: PropTypes.array,
};

export default AdocaoTable;
