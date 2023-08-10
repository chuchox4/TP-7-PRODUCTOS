/*import { useState } from 'react';*/
import Contacto from './Screens/Contacto/Contacto';
import Home from './Screens/Home/Home';
/*import ReactDOM from "react-dom/client";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/Contacto" element={<Contacto/>} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;