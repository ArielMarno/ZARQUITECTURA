import '../styles/banner.css';
import arrow from "../assets/arrow-w.webp";

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-card'>
                <h4>PRIMERA CONSULTA GRATIS</h4>
                <p>Te asesoramos para hacer realidad tu proyecto arquitectónico o desarrollo inmobiliario. En la primera consulta, ofrecemos una propuesta personalizada que refleja tus necesidades y te acompañamos en todo el proceso, desde el diseño hasta la ejecución.</p>
                <div className='btn'>
                    <a href="#">CONSULTAR <img src={arrow} alt="flecha" /></a>
                </div>
                
        </div>
    </div>
  )
}

export default Banner