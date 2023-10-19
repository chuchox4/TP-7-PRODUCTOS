import { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import context from 'react-bootstrap/esm/AccordionContext';
import { Link } from "react-router-dom";
import {carritoContext} from '../Contexts/carritoContext';
const CardProducto = (props/*{img = "", titulo="", texto =""}*/) => {
  const productoCarrito = useContext (carritoContext);

    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.precio}
        </Card.Text>
       <Link to={"/verDetalles/"+props.id}>Ver Detalle</Link>
       <Button onClick={() => productoCarrito.añadirProducto(props)}>Agregar Al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProducto;
