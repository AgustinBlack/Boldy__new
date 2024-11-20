// import clases from './Nav.module.css'
// import inicio from '../../assets/icons/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
// import productos from '../../assets/icons/shopping_bag_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
// import boldy from '../../assets/icons/boldy.webp'
// import question from '../../assets/icons/help_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
// import userAdmin from '../../assets/icons/person_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
// import usImg from '../../assets/icons/info_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
// import { Link } from "react-router-dom"
// import { useAuth } from '../../context/AuthContext'
// import { useState, useEffect } from 'react'
// import iconSearch from '../../assets/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
// import { useFiltrers } from '../../context/FiltrersProd'
// import { useNavigate } from 'react-router-dom'

// const Nav = () => {
//     const { isAdmin, setIsAdmin } = useAuth();
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const { setSearchQuery, setIsSearching } = useFiltrers()
//     const navigate = useNavigate()

//     useEffect(() => {
//         const savedIsAdmin = localStorage.getItem('isAdmin') === 'true';
//         const savedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//         setIsAdmin(savedIsAdmin);
//         setIsLoggedIn(savedIsLoggedIn);
//     }, [setIsAdmin]);



//     const handleOnSearch = (searchValue) => {
//         setSearchQuery(searchValue);
//         if (searchValue.trim()) {
//             setIsSearching(true);
//             navigate('seccion/Productos');
//         }
//     };

//     const handleOnClick = () => {
//         const searchInput = document.querySelector('.' + clases.input);
//         const searchValue = searchInput.value.trim();
//         handleOnSearch(searchValue);
//     };

//     return (
//         <div>
//             <div className={clases.div__logo}>
//                 <img className={clases.logo} src={boldy} alt="Boldy" />
//             </div>
//             <div className={clases.menu}>
//                 <div className={clases.menu__phone}>
//                     <Link to='/' className={clases.link}>
//                         <span className={clases.link__icon}>
//                             <img className={clases.nav__img} src={inicio} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
//                         </span>
//                         <span className={clases.link__title}>Inicio</span>
//                     </Link>
//                     <Link to='seccion/Nosotros' className={clases.link}>
//                         <span className={clases.link__icon}>
//                             <img className={clases.nav__img} src={usImg} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
//                         </span>
//                         <span className={clases.link__title}>Nosotros</span>
//                     </Link>
//                     <Link to='seccion/Productos' className={clases.link}>
//                         <span className={clases.link__icon}>
//                             <img className={clases.nav__img} src={productos} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
//                         </span>
//                         <span className={clases.link__title}>Productos</span>
//                     </Link>
//                     <Link to='seccion/Preguntas' className={clases.link}>
//                         <span className={clases.link__icon}>
//                             <img className={clases.nav__img} src={question} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
//                         </span>
//                         <span className={clases.link__title}>FAQS</span>
//                     </Link>

//                     {isLoggedIn && isAdmin && (
//                         <Link to='seccion/gestorProductos' className={clases.link}>
//                             <span className={clases.link__icon}>
//                                 <img className={clases.nav__img} src={userAdmin} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
//                             </span>
//                             <span className={clases.link__title}>Gestor</span>
//                         </Link>
//                     )}
//                 </div>

//             </div>
//             <div className={clases.input__container}>
//                 <div className={clases.div__input}>
//                     <input type="text" placeholder='Buscar Productos...' className={clases.input} />
//                 </div>
//                 <img className={clases.img__icon} src={iconSearch} alt="Buscar" onClick={handleOnClick} />
//             </div>
//         </div>

//     )
// }

// export default Nav

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clases from './Nav.module.css';
import inicio from '../../assets/icons/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp';
import productos from '../../assets/icons/shopping_bag_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp';
import boldy from '../../assets/icons/boldy.webp';
import question from '../../assets/icons/help_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp';
import userAdmin from '../../assets/icons/person_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp';
import usImg from '../../assets/icons/info_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
import iconSearch from '../../assets/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
import { useAuth } from '../../context/AuthContext';
import { useFiltrers } from '../../context/FiltrersProd';

const Nav = () => {
    const { isAdmin, setIsAdmin } = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { setSearchQuery, setIsSearching } = useFiltrers();
    const navigate = useNavigate();
    const [isInputVisible, setIsInputVisible] = useState(false);

    useEffect(() => {
        const savedIsAdmin = localStorage.getItem('isAdmin') === 'true';
        const savedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        setIsAdmin(savedIsAdmin);
        setIsLoggedIn(savedIsLoggedIn);
    }, [setIsAdmin]);

    const handleOnSearch = (searchValue) => {
        setSearchQuery(searchValue);
        if (searchValue.trim()) {
            setIsSearching(true);
            navigate('seccion/Productos');
        }
    };

    const handleOnClick = () => {
        setIsInputVisible(!isInputVisible); // Alterna la visibilidad del input
    };

    const handleSearch = () => {
        const searchInput = document.querySelector('.' + clases.input);
        const searchValue = searchInput?.value.trim();
        handleOnSearch(searchValue);
    };

    const toggleInputVisibility = () => {
        setIsInputVisible((prev) => !prev); // Cambia la visibilidad del input
    };

    return (
        <div>
            <div className={clases.div__logo}>
                <img className={clases.logo} src={boldy} alt="Boldy" />
            </div>
            <div className={clases.menu}>
                <div className={clases.menu__phone}>
                    <Link to='/' className={clases.link}>
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={inicio} alt='Inicio' />
                        </span>
                        <span className={clases.link__title}>Inicio</span>
                    </Link>
                    <Link to='seccion/Nosotros' className={clases.link}>
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={usImg} alt='Nosotros' />
                        </span>
                        <span className={clases.link__title}>Nosotros</span>
                    </Link>
                    <Link to='seccion/Productos' className={clases.link}>
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={productos} alt='Productos' />
                        </span>
                        <span className={clases.link__title}>Productos</span>
                    </Link>
                    <Link to='seccion/Preguntas' className={clases.link}>
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={question} alt='FAQS' />
                        </span>
                        <span className={clases.link__title}>FAQS</span>
                    </Link>

                    {isLoggedIn && isAdmin && (
                        <Link to='seccion/gestorProductos' className={clases.link}>
                            <span className={clases.link__icon}>
                                <img className={clases.nav__img} src={userAdmin} alt='Gestor' />
                            </span>
                            <span className={clases.link__title}>Gestor</span>
                        </Link>
                    )}
                </div>
            </div>
            <div className={clases.input__container}>
                {isInputVisible && (
                    <div className={clases.div__input}>
                        <input
                            type="text"
                            placeholder="Buscar Productos..."
                            className={clases.input}
                        />
                    </div>
                )}
                <img
                    className={clases.img__icon}
                    src={iconSearch}
                    alt="Buscar"
                    onClick={toggleInputVisibility}
                />
            </div>
        </div>
    );
};

export default Nav;
