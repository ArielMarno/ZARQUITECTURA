import '../styles/contacto.css';

import phone from '../assets/icons/telefono.webp';
import wp from '../assets/icons/whatsapp.webp';
import mail from '../assets/icons/mail.webp';
import ubi from '../assets/icons/ubicacion.webp';

import arrow from '../assets/arrow-w.webp';

const Contacto = () => {
  return (
    <div className='contacto' id='contacto'>
        <div className='contact-main'>
            <form data-aos="fade-up" >
                <label htmlFor="nombre">NOMBRE</label>
                <input type="text" placeholder='Tu nombre'/>
                <label htmlFor="correo">EMAIL</label>
                <input type="text" placeholder='ejemplo@tuemail.com' />
                <label htmlFor="telefono">TELÉFONO</label>
                <input type="text"  placeholder='Número de teléfono'/>
                <label htmlFor="mensaje">MENSAJE</label>
                <textarea name="mensaje" id="mensaje" placeholder='Escribí tu consulta aquí'></textarea>
                <button type='submit'>ENVIAR <img src={arrow} alt="flecha" /></button>
            </form>
            <div className='contact-content'>
                <h2 data-aos="fade-up">CONTACTO</h2>
                <p data-aos="fade-down">Estamos a disposición para despejar cualquier duda que puedas tener o asesorarte sin cargo para comenzar a acompañarte en tu proyecto. </p>
                <div className='contact-content_icons'>
                    <div data-aos="fade-up" className='icon'>
                        <img src={phone} alt="teléfono" />
                        <h4>Teléfono</h4>
                        <p>+54 9 2634 87-0714 </p>
                    </div>
                    <div data-aos="fade-up" className='icon'>
                        <img src={wp} alt="whatsapp" />
                        <h4>Whatsapp</h4>
                        <p>+54 9 2634 87-0714 </p>
                    </div>
                    <div data-aos="fade-up" className='icon'>
                        <img src={mail} alt="email" />
                        <h4>Email</h4>
                        <p>zarquitectura7@gmail.com</p>
                    </div>
                    <div data-aos="fade-up" className='icon'>
                        <img src={ubi} alt="ubicación" />
                        <h4>Ubicación</h4>
                        <p>Mendoza, Argentina.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='contact-map'>
            <iframe data-aos="fade-up" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.3688171185095!2d-68.83287952369727!3d-32.88841567361728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e092312ca1b4b%3A0x33480ba7406f70d6!2sPedro%20B.%20Palacios%201354%2C%20M5502%20Mendoza!5e0!3m2!1ses!2sar!4v1730164334969!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
    </div>
  )
}

export default Contacto