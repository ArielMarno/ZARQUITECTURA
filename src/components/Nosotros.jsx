import "../styles/nosotros.css";
import arrow from "../assets/arrow_zq.png";

import zaq from "../assets/nosotros/nosotros1.webp";
import angle from "../assets/nosotros/nosotros2.webp";

const Nosotros = () => {
  return (
    <div className="nosotros" id="nosotros">
        <div className="title">
            <h2 data-aos="fade-up">QUIÉNES SOMOS</h2>
        </div>
        <div className="nosotros_main">
            <div className="contact">
                <a href="https://wa.link/w4olxx" data-aos="fade-up">CONTACTO <img src={arrow} alt="flecha" /></a>
                <div className="contact_img">
                    <img data-aos="fade-up" src={zaq} alt="logo" />
                </div>
            </div>
            <div className="content">
                <p data-aos="fade-down">Nos dedicamos al diseño arquitectónico y desarrollos inmobiliarios, creando soluciones innovadoras y eficientes que se adaptan a las necesidades de nuestros clientes.</p>
                <div className="content_bottom">
                    <p data-aos="fade-up">Nuestro enfoque integral, desde la planificación hasta la ejecución, asegura resultados de alta calidad, optimizando cada etapa del proyecto.</p>
                    <div className="content_img">
                        <img data-aos="fade-up" src={angle} alt="edificio" />
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Nosotros