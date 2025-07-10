import '../styles/banner.css';
import arrow from "../assets/arrow-w.webp";

const Banner = () => {
  return (
    <div className='banner'>
        <div data-aos="fade-up" className='banner-card'>
                <h4>REALIZÁ TU PRIMER CONSULTA</h4>
                <p>Te asesoramos para hacer realidad tu proyecto arquitectónico. En la primer consulta, ofrecemos una propuesta personalizada que refleja tus necesidades y te acompañamos en todo el proceso, desde el diseño hasta la ejecución.</p>
                <div className='btn'>
                    <a href="https://wa.link/w4olxx">CONSULTAR <img src={arrow} alt="flecha" /></a>
                </div>
                
        </div>
    </div>
  )
}

export default Banner