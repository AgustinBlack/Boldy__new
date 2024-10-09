import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import clases from './FormUserSesion.module.css';
import { useNotification } from '../../context/UseNotification';

const FormUserSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isAdmin, setIsAdmin } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const { showNotification } = useNotification()

    const adminEmail = 'admin@example.com';
    const adminPassword = 'adminpassword';

    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');
        const savedIsAdmin = localStorage.getItem('isAdmin') === 'true';
        const savedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (savedIsLoggedIn) {
            setIsLoggedIn(true);
            setEmail(savedEmail || '');
            setPassword(savedPassword || '');
            setIsAdmin(savedIsAdmin);
        }
    }, [setIsAdmin]);


    const handleLogin = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            showNotification('Usuario o Contraseña se encuentra vacío. Por favor, complete ambos campos.', 'error');
            return;
        }

        const saveCredentials = window.confirm('¿Deseas guardar tus credenciales para la próxima vez?');

        if (saveCredentials) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        }

        if (email === adminEmail && password === adminPassword) {
            setIsAdmin(true);
            setIsLoggedIn(true);
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/seccion/gestorProductos')
            showNotification('Iniciaste Sesion correctamente.', 'info')
        } else {
            setIsAdmin(false);
            setIsLoggedIn(true);
            localStorage.setItem('isAdmin', 'false');
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/');
        }
    };

    return (
        <div className={clases.loginContainer}>
            {!isLoggedIn ? (
                <div>
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
                            autoComplete='current-password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className={clases.div__btn}>
                            <button className={clases.btn} type="submit">Iniciar sesión</button>                    
                        </div>
                    </form>
                </div>
            ) : (
                isAdmin ? (
                    <div className={clases.div__btn__gestor}>
                        <Link className={clases.btn__gestor} to={'/seccion/gestorProductos'}>
                            Gestiona tus productos
                        </Link>
                    </div>
                ) : (
                    <div className={clases.div__txt}>
                        <p className={clases.txt}>Ya ingresaste a la Web!</p>
                    </div>
                )
            )}
        </div>
    );
};

export default FormUserSesion;
