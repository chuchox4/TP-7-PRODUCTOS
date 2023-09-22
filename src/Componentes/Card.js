import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const CardProducto = (props/*{img = "", titulo="", texto =""}*/) => {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.texto}
        </Card.Text>
        <Button variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
