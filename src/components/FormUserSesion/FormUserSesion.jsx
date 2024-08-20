import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminView from '../AdminView/AdminView'
import clases from './FormUserSesion.module.css'

const FormUserSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    const adminEmail = 'admin@example.com';
    const adminPassword = 'adminpassword';

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);

            if (savedEmail === adminEmail && savedPassword === adminPassword) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }

            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        const saveCredentials = window.confirm('¿Deseas guardar tus credenciales para la próxima vez?');

        if (saveCredentials) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        }

        if (email === adminEmail && password === adminPassword) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
            navigate('/')
        }

        setIsLoggedIn(true);
    };

    if (isAdmin) {
        return <AdminView />;
    }

    return (
        <div className={clases.loginContainer}>
            <h2 className={clases.titulo}>Iniciar sesión</h2>
            <form className={clases.formLogin} onSubmit={handleLogin}>
                <input
                    className={clases.inputs}
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    autoComplete='username'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={clases.inputs}
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    autoComplete='current-pasword'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={clases.div__btn}>
                    <button className={clases.btn} type="submit">Iniciar sesión</button>                    
                </div>
            </form>
        </div>
    );
}

export default FormUserSesion