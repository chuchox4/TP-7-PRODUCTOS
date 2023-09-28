import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './Detalle.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

function VerDetalle() {
    const [producto, setProducto] = useState({})
    const [isLoading, setLoading] = useState(true)
    const { Id } = useParams();
    useEffect(() => {
        axios.get('https://dummyjson.com/products/' + Id)
            .then(function (response) {
                console.log(response.data)
                setProducto(response.data)
            })
            .finally(() => { setLoading(false) })
    }, [])
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>
            <div className='container'>
                {isLoading ? <h1>asdsad</h1> : (
                    <>
                        <h3>Nombre del producto: {producto.title}</h3>
                        <h3>Precio: {producto.price}</h3>
                        <img src={producto.thumbnail} className='foto' alt=''></img>
                        <h2>Descripcion: {producto.description} </h2>
                    </>

                )}
            </div>
        </Container>
    );
}

export default VerDetalle;
