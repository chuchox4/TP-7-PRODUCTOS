import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Contacto.css'; // Agrega tus estilos personalizados aquí

function Contacto() {
  return (
      <Container>
        <Row className="justify-content-center">
          <Col md={9    }>
            <h1 className="titulo-reg">¡Contáctanos!</h1>
            <Form className="contact-form">
                
              <Form.Group controlId="nombre">
              <div class = "grupoTexto">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Escribe tu nombre" />
                </div>
              </Form.Group>
              <Form.Group controlId="email">
                <div class = "grupoTexto2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="✉  Escribe tu email" />
                </div>
              </Form.Group>
              <Form.Group controlId="telefono">
              <div class = "grupoTexto3">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="☏    Escribe tu teléfono" />
                </div>
              </Form.Group>
              <Form.Group controlId="mensaje">
              <div class = "grupoTexto4">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control type="text"  placeholder="Escribe tu mensaje" />
                </div>
                
              </Form.Group>
              <Button variant="primary" size="lg" type="submit" className="enviar-btn">
                Enviar
              </Button>
              <Button variant="secondary" size="lg" className="volver-btn">
                Volver
              </Button>
            </Form>
          </Col>
        </Row>
        <div className="contact-info">
          <p>Contacto: contacto@example.com</p>
          <p>Teléfono: +123456789</p>
        </div>
      </Container>

      
    
  );
}

export default Contacto;
