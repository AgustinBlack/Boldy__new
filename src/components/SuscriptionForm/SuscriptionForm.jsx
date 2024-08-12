import React, { useState } from 'react';
import clases from './SuscriptionForm.module.css';

const SuscriptionForm = ({ onConfirm }) => {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault();

        const userData = {
            usuario,
            email
        };
        onConfirm(userData);
    };

    return (
        <div className={clases.div__padre}>
            <h3 className={clases.titulo}>SUSCRIBITE AL NEWSLETTER</h3>
            <form className={clases.form} onSubmit={handleConfirm}>
                <div className={clases.div__inputs}>
                    <input className={clases.input} type="text" placeholder='Ingresá tu Usuario' value={usuario} onChange={({ target }) => setUsuario(target.value)} />
                    <input className={clases.input} type="email" placeholder='Ingresá tu E-Mail' value={email} onChange={({ target }) => setEmail(target.value)} />            
                </div>   
                <div className={clases.div__btn}>
                    <button type='submit' className={clases.btn}>Enviar</button>
                </div>         
            </form>
        </div>
    );
}

export default SuscriptionForm;
