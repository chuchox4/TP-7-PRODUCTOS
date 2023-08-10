import { Row, Col } from 'react-bootstrap';
import {useState, useEffect } from 'react';
import axios from 'axios';

function Productos() {
    const [btnFiltro, setBtnFiltro] = useState ();
    const [btnDetalle, setBtnDetalle] = useState (); 
    /*let btnFiltro = document.getElementById("btnFiltro");
    let btnDetalle = document.getElementById("btnDetalle");*/
    const [titulo, setTitulo] = useState ();
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
    
     const botonFiltro = (e) => {
        productos.innerHTML = "";
        filtros.innerHTML = "";
        if (!titulo.value.length) {
            alert("completa todos los campos pedazo de termita asesina de alfajores")
        } else {
            traerFlitros("https://dummyjson.com/products/search?q=" + titulo.value);
        }
    }

    const traerFlitros = (url) => {
        axios.get(url)
            .then(res => {
                const filtros = document.getElementById("filtros");
                console.log(res)
                res.data.products.forEach(element => {
                    console.log(titulo)
                    const tablita = document.createElement("li");
                    tablita.innerHTML = `<li class="list-group-item"><b> ${element.title} </b> <b><button id="btnDetalle" class="btnDetalle" onclick="clickFunction(${element.id})">Detalle</button></b>`;
                    filtros.appendChild(tablita);
                    console.log(filtros)
                });
            });
    }

    const clickFunction = (e) => {
        axios.get(`https://dummyjson.com/products/${e}`)
            .then(res => {
                console.log(res.data.id);
                let mTitle = document.getElementById("modalTitle");
                let mBody = document.getElementById("modalBody");
                mTitle.innerHTML = res.data.title;
                mBody.innerHTML = `<img src = "${res.data.thumbnail}" style = "width:100%; height: auto;"></img><b> ${"Descripcion: "}${res.data.description} </b> <br><b> ${"Precio: "}${res.data.price}</b> </br>`
                $("#modalProducto").modal();
            });

    }

    return (
        <body>
            <div class="botonFiltro">
                <label for="texto">Ingrese el producto</label>
                <input type="text" id="titulo" />
                <button id="btnFiltro" class="btn btn-primary"  onClick={botonFiltro}>FILTRAR</button>
            </div>
            <div class="btnDetalle">

            </div>
            <Row style={{ padding: '4%' }}>
                {Productos.map(Producto => <Col sm={2}><Card img={producto.img} titulo={producto.titulo} texto={producto.texto}></Card>
                </Col>)}
            </Row>
            <div class="modal" id="modalProducto" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalTitle"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" id="modalBody">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

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