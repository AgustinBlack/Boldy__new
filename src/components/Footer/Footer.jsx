import React from 'react'
import clases from './Footer.module.css'
import phone from '../../assets/icons8-teléfono-32.png'
import gmail from '../../assets/icons8-gmail-50.png'
import instagram from '../../assets/icons8-instagram-32.png'

const Footer = () => {
  return (
    <div className={clases.container}>
        <div className={clases.div__padre}>
            <h4 className={clases.titulo}>Navegacion</h4>
            <div className={clases.div__data}>
                <p className={clases.data}>Inicio</p>
                <p className={clases.data}>Productos</p>
                <p className={clases.data}>Favoritos</p>
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
                <p className={clases.data}><img className={clases.img} src={gmail} alt="" /> Mail:</p>
                <p className={clases.data}><img className={clases.img} src={phone} alt="" /> Numero de Telefono</p>
                <p className={clases.data}><img className={clases.img} src={instagram} alt="" /> Instagram</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
