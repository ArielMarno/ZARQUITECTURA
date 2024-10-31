import '../styles/footer.css';
import logo from "../assets/logo-d.webp";
import arrow from "../assets/arrow_zq.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo-navbar'>
            <div data-aos="fade-right" className='navbar'>
                <a href="#nosotros">NOSOTROS</a>
                <a href="#servicios">SERVICIOS</a>
                <a href="#proyectos">PROYECTOS</a>
                <a href="#contacto">CONTACTO</a>
            </div>
            <div data-aos="fade-right" className='logo'>
                <img src={logo} alt="logo" />
                <h2>ZARQUITECTURA</h2>
            </div>
        </div>
        <div className='ig-copy'>
            <a data-aos="fade-up"className='ig-link' href="https://www.instagram.com/z.arquitectura7/">INSTAGRAM<img src={arrow} alt="flecha"/></a>
            <div className='copyright'>
                <p>©{new Date().getFullYear()} - Todos los derechos reservados.</p>
                <p>Sitio web diseñado y desarrollado por <a href="https://sunfloweragencia.com/">SunFlower Agencia Digital</a>.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer