import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './Home.css';
import CardProducto from '../../Componentes/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        const randomProducts = getRandomProducts(res.data.products, 6);
        setProductos(randomProducts);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, []);

  const getRandomProducts = (array, count) => {
    const shuffledArray = array.slice(); // Create a shallow copy
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, count);
  };

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
      <Container >
        <br></br>
        <Carousel>
          {productos.map((producto, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={producto.images[0]}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <h1>Productos aleatorios</h1>
        <Row xs={1} md={6 / 3} className="product">
          {productos.map(producto => <Col sm={2}><CardProducto titulo={producto.title} img={producto.thumbnail} texto={producto.description} precio={producto.price} Id={producto.id}></CardProducto>
          </Col>)}
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
