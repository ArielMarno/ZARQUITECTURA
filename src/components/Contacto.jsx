import {React, useState} from 'react';
import '../styles/contacto.css';

import phone from '../assets/icons/telefono.webp';
import wp from '../assets/icons/whatsapp.webp';
import mail from '../assets/icons/mail.webp';
import ubi from '../assets/icons/ubicacion.webp';

import arrow from '../assets/arrow-w.webp';

const Contacto = () => {

     // Estado para almacenar los datos del formulario
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
      });
    
      // Manejar cambios en los inputs
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <div className='contacto' id='contacto'>
        <div className='contact-main'>
            <form data-aos="fade-up" action="https://formspree.io/f/xdkozkry" method="POST">
                <label htmlFor="nombre">NOMBRE</label>
                <input type="text" name='nombre' id='nombre' value={formData.nombre} placeholder='Tu nombre' autoComplete="off"
                  onChange={handleInputChange}
                  required/>
                <label htmlFor="correo">EMAIL</label>
                <input type="text" name='email' id='email' value={formData.email} placeholder='ejemplo@tuemail.com' autoComplete="off"
                  onChange={handleInputChange}
                  required/>
                <label htmlFor="telefono">TELÉFONO</label>
                <input type="text" name='telefono' id='telefono' value={formData.telefono} placeholder='Número de teléfono' autoComplete="off"
                  onChange={handleInputChange}
                  required/>
                <label htmlFor="mensaje">MENSAJE</label>
                <textarea name="mensaje" id="mensaje" value={formData.mensaje} placeholder='Escribí tu consulta aquí' autoComplete="off"
                  onChange={handleInputChange}
                  required></textarea>
                <button type='submit'>ENVIAR <img src={arrow} alt="flecha" /></button>
            </form>
            <div className='contact-content'>
                <h2 data-aos="fade-up">CONTACTO</h2>
                <p data-aos="fade-down">Estamos a disposición para despejar cualquier duda que puedas tener o asesorarte para comenzar a acompañarte en tu proyecto. </p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4029.7296033638577!2d-68.8242743!3d-32.9144079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e095097de9a85%3A0x5d63cc2efae8b1c1!2sLa%20Barraca%20Mall!5e1!3m2!1ses!2sar!4v1752174564382!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
    </div>
  )
}

export default Contacto