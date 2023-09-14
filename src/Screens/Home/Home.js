import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';

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
    <Container>
      <h1>Productos aleatorios</h1>
      <Row xs={1} md={6/3} className="product">
        {productos.map((producto) => (
          <Col key={producto.id}>
            <Card className="mb-3">
              <Card.Img src={producto.images[0]} alt={producto.title} />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Precio: ${producto.price}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
