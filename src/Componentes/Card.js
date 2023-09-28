import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const CardProducto = (props/*{img = "", titulo="", texto =""}*/) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.precio}
        </Card.Text>
       <Link to={"/verDetalles/"+props.Id}>Ver Detalle</Link>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
