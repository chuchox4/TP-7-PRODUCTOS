import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css'

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const randomProducts = getRandomProducts(res.data.products, 6);
        setProductos(randomProducts);
      })
      .catch(error => {
        console.error("Error al obtener los productos:", error);
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
    <html className='body'>
    <body className='body'>
    <Container className='fondoProductos'>
      <h1>Productos Aleatorios</h1>
      <Row>
        {productos.map(producto => (
          <Col key={producto.id} sm={6} md={4} lg={2}>
            <div className="product-card">
              <h3>{producto.name}</h3>
              <p>Precio: {producto.price}</p>
              <img
                src={producto.image}
                alt={`Imagen de ${producto.name}`}
                className="product-image"           
              />     
            </div>
          </Col>
        ))}
      </Row>
      
    </Container>
    </body>
    </html>
  );
}

export default Home;
