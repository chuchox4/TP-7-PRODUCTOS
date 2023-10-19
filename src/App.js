/*import { useState } from 'react';*/
import Contacto from './Screens/Contacto/Contacto';
import Home from './Screens/Home/Home';
import Productos from './Screens/Productos/Productos';
import VerDetalle from './Screens/verDetalle/VerDetalle';
/*import ReactDOM from "react-dom/client";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { carritoContext } from './Contexts/carritoContext';
import { useEffect, useState } from 'react';
import Carrito from './Screens/Carrito/Carrito'
function App() {
  const [carrito,SetCarrito] = useState([])

  const añadirProducto = (prod) => {
    let yaExiste = carrito.findIndex(producto => producto.id === prod.id);
    if(yaExiste === -1) SetCarrito([...carrito, {...prod, cantidad: 1}]);
    else {
      SetCarrito(carrito.map(producto => producto.id === prod.id ? {...producto, cantidad: producto.cantidad + 1} : producto));
    }
  }

  const actualizarCantidad = (prod) => {
      SetCarrito(carrito.map(producto => producto.id === prod.id ? {...producto, cantidad: prod.cantidad} : producto));
  }
  const eliminarProducto = (prod) => {
    console.log("eliminar:", prod)
    SetCarrito(
      carrito.filter( product => product.id !== prod.id )
    );}

  useEffect(() => {
    console.log("CARRITOCAMBIO", carrito);
  }, [carrito]);

  return (
    <carritoContext.Provider value={{carrito, SetCarrito, añadirProducto, actualizarCantidad, eliminarProducto}}>    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/verDetalles/:Id" element={<VerDetalle />} />
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
    </carritoContext.Provider>

  );
}
export default App;