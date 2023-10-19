import { useState } from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { carritoContext } from '../../Contexts/carritoContext'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Carrito() {
    const productoCarrito = useContext(carritoContext);
    const [isLoading, setLoading] = useState(true)
    return (
        <Container fluid>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container >
                    <Navbar.Brand href="#home">TPPRODUCTOS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Productos">Productos</Nav.Link>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                            <Nav.Link><Link to={"/carrito"}>Carrito</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>
            <div className='container'>
                {productoCarrito.carrito.map((producto) => (
                    <>
                        <h3>Nombre del producto: {producto.titulo}</h3>
                        <h3>Precio: {producto.precio}</h3>
                        <img src={producto.img} className='foto' alt=''></img>
                        <h2>Descripcion: {producto.texto} </h2>
                        <button onClick={() => productoCarrito.actualizarCantidad({...producto, cantidad: producto.cantidad + 1})}>+</button>
                        <h3>{producto.cantidad}</h3>
                        <button onClick={() => productoCarrito.actualizarCantidad({...producto, cantidad: producto.cantidad - 1})}>-</button>
                        <br></br>
                        <Button onClick={() => productoCarrito.eliminarProducto(producto)}>Eliminar</Button>
                    </>

                ))}
            </div>
        </Container>
    );
}

export default Carrito;
