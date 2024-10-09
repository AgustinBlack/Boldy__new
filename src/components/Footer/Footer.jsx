import React from 'react'
import clases from './Footer.module.css'
import phone from '../../assets/icons/icons8-teléfono-32.png'
import gmail from '../../assets/icons/icons8-gmail-50.png'
import instagram from '../../assets/icons/icons8-instagram-32.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={clases.container}>
        <div className={clases.div__padre}>
            <h4 className={clases.titulo}>Navegacion</h4>
            <div className={clases.div__data}>
                <p className={clases.data}><Link to='/'>Inicio</Link></p>
                <p className={clases.data}><Link to='seccion/Nosotros'>Nosotros</Link></p>
                <p className={clases.data}><Link to='seccion/Productos'>Productos</Link></p>
                <p className={clases.data}><Link to='seccion/Preguntas'>FAQS</Link></p>
            </div>
        </div>
        <div className={clases.div__padre}>
            <h4 className={clases.titulo}>Medio de pago</h4>
            <div className={clases.div__data}>
                <p className={clases.data}>El cliente se contacta por WhatsApp y coordinan el medio de pago.</p>                
            </div>
        </div>
        <div className={clases.div__padre}>
            <h4 className={clases.titulo}>Contacto</h4>
            <div className={clases.div__data}>
                <a className={clases.links} href=""><p className={clases.data}><img className={clases.img} src={gmail} alt="Mail" /> Mail</p></a>
                <a className={clases.links} href=""><p className={clases.data}><img className={clases.img} src={phone} alt="Telefono" /> Numero de Telefono</p></a>
                <a className={clases.links} href="https://www.instagram.com/boldy.ar/"><p className={clases.data}><img className={clases.img} src={instagram} alt="Instagram" /> Instagram</p></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
