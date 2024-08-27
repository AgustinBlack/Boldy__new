import clases from './Nav.module.css'
import favorito from '../../assets/icons/favorite_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import inicio from '../../assets/icons/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import productos from '../../assets/icons/shopping_bag_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import boldy from '../../assets/icons/boldy.png'
import question from '../../assets/icons/help_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import userAdmin from '../../assets/icons/person_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import { Link } from "react-router-dom"
// import { useState, useEffect } from 'react'

const Nav = () => {
    // const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     const savedEmail = localStorage.getItem('email');
    //     const adminEmail = 'admin@example.com';

    //     if (savedEmail === adminEmail) {
    //         setIsAdmin(true);
    //     } else {
    //         setIsAdmin(false);
    //     }
    // }, []);

    return (
        <div>
            <div className={clases.div__logo}>
                <img className={clases.logo} src={boldy} alt="" />
            </div>
            <div className={clases.menu}>
                <Link to='/' className={clases.link}>
                    <span className={clases.link__icon}>
                        <img className={clases.nav__img} src={inicio} width="192" height="192" fill="currentColor" viewBox="0 0 256 256"></img>
                    </span>
                    <span className={clases.link__title}>Nosotros</span>
                </Link>
                <Link to='seccion/Productos' className={clases.link}>
                    <span className={clases.link__icon}>
                        <img className={clases.nav__img} src={productos} width="192" height="192" fill="currentColor" viewBox="0 0 256 256"></img>
                    </span>
                    <span className={clases.link__title}>Productos</span>
                </Link>
                <Link to='seccion/Guardados' className={clases.link}>
                    <span className={clases.link__icon}>
                        <img className={clases.nav__img} src={favorito} width="192" height="192" fill="currentColor" viewBox="0 0 256 256"></img>
                    </span>
                    <span className={clases.link__title}>Favoritos</span>
                </Link>
                <Link to='seccion/Preguntas' className={clases.link}>
                    <span className={clases.link__icon}>
                        <img className={clases.nav__img} src={question} width="192" height="192" fill="currentColor" viewBox="0 0 256 256"></img>
                    </span>
                    <span className={clases.link__title}>FAQS</span>
                </Link>
                {/* {
                    isAdmin && (
                        <Link to='seccion/User' className={clases.link}>
                            <span className={clases.link__icon}>
                                <img className={clases.nav__img} src={userAdmin} width="192" height="192" fill="currentColor" viewBox="0 0 256 256"></img>
                            </span>
                            <span className={clases.link__title}>Usuario</span>
                        </Link>                        
                    )
                } */}
                <Link to='seccion/User' className={clases.link}>
                    <span className={clases.link__icon}>
                        <img className={clases.nav__img} src={userAdmin} width="192" height="192" fill="currentColor" viewBox="0 0 256 256"></img>
                    </span>
                    <span className={clases.link__title}>Usuario</span>
                </Link>   
            </div>
        </div>

    )
}

export default Nav