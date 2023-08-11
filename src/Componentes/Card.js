import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const CardProducto = (props/*{img = "", titulo="", texto =""}*/) => {
  //console.log(props.product)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.thumbnail} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
          {props.product.price}
        </Card.Text>
        <Button variant="primary">Ver Detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
