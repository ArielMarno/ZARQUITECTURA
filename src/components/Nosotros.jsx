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
                <a href="https://wa.link/w4olxx" data-aos="fade-down">CONTACTO <img src={arrow} alt="flecha" /></a>
                <div className="contact_img">
                    <img data-aos="fade-up" src={zaq} alt="logo" />
                </div>
                <p className="responsive-text" data-aos="fade-down">Somos un estudio de arquitectura especializado en el diseño y la construcción de espacios únicos. Nuestro enfoque principal es concebir cada proyecto como una obra de arte, donde cada detalle se piensa para generar nuevas sensaciones y experiencias. </p>
                <a className="responsive-btn" href="https://wa.link/w4olxx">CONTACTO <img src={arrow} alt="flecha" /></a>
            </div>
            <div className="content">
                <p data-aos="fade-down" className="destock-text">Somos un estudio de arquitectura especializado en el diseño y la construcción de espacios únicos. Nuestro enfoque principal es concebir cada proyecto como una obra de arte, donde cada detalle se piensa para generar nuevas sensaciones y experiencias.</p>
                <div className="content_bottom">
                    <div content_bottom-container>
                        <p data-aos="fade-up">Trabajamos capturando la morfología y el impacto visual, buscando que cada espacio no solo cumpla su función, sino que también deje una huella memorable en quienes lo habitan y lo observan. Creemos que la arquitectura es un lenguaje capaz de emocionar, transformar y perdurar en el tiempo.</p>
                    </div>
                    
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