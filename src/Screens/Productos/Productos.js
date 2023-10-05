import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import CardProducto from '../../Componentes/Card';
import Button from 'react-bootstrap/Button';
/*import Col from 'react-bootstrap/Col';*/
import Form from 'react-bootstrap/Form';
import './producto.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import carritoContext from '../../Contexts/carritoContext'
function Productos() {
    /*let btnFiltro = document.getElementById("btnFiltro");
    let btnDetalle = document.getElementById("btnDetalle");*/
    const [titulo, setTitulo] = useState();
    const [Productos, setProductos] = useState([{}]);    
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                console.log(res)
                setProductos(res.data.products)
            })
            .catch(e => {
                console.log(e)
            });
    }, []);



    console.log(Productos)

    const handleChange = (event) => {
        setTitulo(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.value === "") {
            alert("completa todos los campos pedazo de termita asesina de alfajores")
        } else {
            traerFlitros(`https://dummyjson.com/products/search?q=${titulo}`);
            console.log("Valores del filtro:", Productos)
        }
    }

    const traerFlitros = (url) => {
        console.log("URL", url);
        axios.get(url)
            .then(res => {
                setProductos(res.data.products)
                console.log("CONSOLELOG:", res.data.products)
            });
    }

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
            <div className='fondo'>
                <Form onSubmit={(e) => handleSubmit(e)} noValidate className='form'>
                    <Form.Group /*as={Col} md="4"*/ controlId="validationCustom01">
                        <Form.Label>Ingrese el producto a buscar</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ingrese el producto"
                            value={titulo}
                            name="titulo"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type="submit">FILTRAR</Button>
                </Form>

                <Row style={{ padding: '2%' }}>
                    {Productos.map(producto => <Col sm={2}><CardProducto titulo={producto.title} img={producto.thumbnail} texto={producto.description} precio={producto.price} Id={producto.id}></CardProducto>
                    </Col>)}
                </Row>
            </div>
        </Container>
    );
}

export default Productos;