import "../styles/proyectos.css";

import p1 from "../assets/grilla/galeria1.webp";
import p2 from "../assets/grilla/galeria2.webp";
import p3 from "../assets/grilla/galeria3.webp";
import p4 from "../assets/grilla/galeria4.webp";
import p5 from "../assets/grilla/galeria5.webp";
import p6 from "../assets/grilla/galeria6.webp";
import p7 from "../assets/grilla/galeria7.webp";
import p8 from "../assets/grilla/galeria8.webp";
import p9 from "../assets/grilla/galeria9.webp";


const galeria= [
    { id: 1, image: p1, name: 'Senda 14', description: '230m2 - Volúmenes simples que generan un patio lateral como espacio de transición. El ingreso está definido por planos ciegos y vegetación baja, creando privacidad. La fachada mezcla revestimientos chapa oxidada y texturas suaves que acompañan la luz natural sin sobresalir.' },
    { id: 2, image: p2, name: 'Loma Haus', description: '480m2 - El ingreso se protege mediante un retranqueo que crea sombra y profundidad. La fachada presenta una apertura mínima hacia la calle y se abre progresivamente hacia el interior. Iluminación cálida y vegetación puntual suavizan los límites construidos.' },
    { id: 3, image: p3, name: 'Prisma', description: '460m2 - Frente abierto y controlado. La casa se eleva ligeramente sobre el terreno, con una entrada directa enmarcada por planos horizontales. Materiales claros y vegetación rastrera refuerzan la horizontalidad del conjunto.' },
    { id: 4, image: p4, name: 'Loma Haus', description: '480m2 - Patio lateral de doble altura donde ingresa la vegetación hacia los distintos espacios.' },
    { id: 5, image: p5, name: 'NOMAD', description: '272m2 - Fachada que refleja la luz del día filtrada por árboles y cielo. La arquitectura dialoga con el entorno inmediato a través de luz y sombra.' },
    { id: 6, image: p6, name: 'Loma Haus', description: '480m2 - Vista posterior donde los distintos espacios se abren hacia el patio donde se remata con la piscina.' },
    { id: 7, image: p7, name: 'ALTARIA', description: '785m2 - Edificio en terrazas que permite visuales abiertas y relación directa con el exterior. Cada unidad cuenta con balcones ajardinados que rompen la rigidez del volumen. Predominan materiales robustos como hormigón, hierro y vegetación integrada.' },
    { id: 8, image: p8, name: 'CORTEN', description: '250m2 - Composición de volúmenes puros y sobrios con estética brutalista refinada. El cuerpo principal en hormigón visto transmite solidez y atemporalidad. La entrada vertical se destaca con un portón de madera de doble altura y un paño vidriado que aporta luz y calidez al interior.' },
    { id: 9, image: p9, name: 'VELINTON', description: '820m2 - Departamentos con circulación central abierta. Las unidades se agrupan en torno a vacíos verticales que permiten luz y ventilación cruzada. El sistema estructural se manifiesta con concreto expuesto y celosías metálicas.' }
  ];

const Proyectos = () => {
  return (
    <div className='proyectos' id="proyectos">
        <div className='title'>
            <h2 data-aos="fade-up">PROYECTOS</h2>
        </div>
        <div className='grid-container'>
            {galeria.map((gallery) => (
            <div className="box-proyectos" key={gallery.id}>
                <img src={gallery.image} alt={gallery.image}/>
                <div className="capa">
                  <div className="capa-content">
                    <h3>{gallery.name}</h3>
                    <p>{gallery.description}</p> 
                  </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Proyectos