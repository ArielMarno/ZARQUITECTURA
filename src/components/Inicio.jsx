import { React, useState} from 'react';
import "../styles/inicio.css";
import logo from "../assets/logo.webp";
import Burguer from './Burguer';

const Inicio = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
  setClick(!click);
  }


  return (
    <div className="inicio">
        <div className='navbar'>
                <img src={logo} alt="logo" />
            <nav className={`links ${click ? 'active' : ''}`}>
                <a href="#nosotros">NOSOTROS</a>
                <a href="#servicios">SERVICIOS</a>
                <a href="#proyectos">PROYECTOS</a>
                <a href="#contacto">CONTACTO</a>
            </nav>
            <div className="burguer">
                <Burguer handleClick={handleClick}/> 
            </div>
        </div>
        <div className="title">
            <h1>ZARQUITECTURA</h1>
            <p>LE DAMOS VIDA A TU VISIÓN</p>
        </div>
    </div>
  )
}

export default Inicio