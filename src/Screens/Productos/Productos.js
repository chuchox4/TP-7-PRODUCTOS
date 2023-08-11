import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducto from '../../Componentes/Card';
import Button from 'react-bootstrap/Button';
/*import Col from 'react-bootstrap/Col';*/
import Form from 'react-bootstrap/Form';
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
            });
    }, []);

    const handleChange = (event) => {
        setTitulo(event.target.value)
      }
    const handleSubmit  = (e) => {
         e.preventDefault();
        if (!e.value==="") {
            alert("completa todos los campos pedazo de termita asesina de alfajores")
        } else {
            traerFlitros("https://dummyjson.com/products/?q=" + titulo);
        }
    }

    const traerFlitros = (url) => {
        axios.get(url)
            .then(res => {
                setProductos(res.data.products)
                console.log("CONSOLELOG:", res.data.products)
            });
    }

    return (
        <body>
            <Form onSubmit={(e) => handleSubmit(e)} noValidate className='form'>
                <Form.Group /*as={Col} md="4"*/ controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
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
                {Productos.map(producto => <Col sm={2}><CardProducto img={producto.thumbnail} titulo={producto.title} texto={producto.description}></CardProducto>
                </Col>)}
            </Row>

            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            <script src="scripts.js"></script>

        </body>

    );
}

export default Productos;