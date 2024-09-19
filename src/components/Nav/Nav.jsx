import clases from './Nav.module.css'
import inicio from '../../assets/icons/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
import productos from '../../assets/icons/shopping_bag_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
import boldy from '../../assets/icons/boldy.webp'
import question from '../../assets/icons/help_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
import userAdmin from '../../assets/icons/person_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <div className={clases.div__logo}>
                <img className={clases.logo} src={boldy} alt="Boldy" />
            </div>
            <div className={clases.menu}>
                <Link to='/' className={clases.link}>
                    {/* <div className={clases.link__elements}> */}
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={inicio} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
                        </span>
                        <span className={clases.link__title}>Nosotros</span>
                    {/* </div> */}
                </Link>
                <Link to='seccion/Productos' className={clases.link}>
                    {/* <div className={clases.link__elements}> */}
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={productos} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
                        </span>
                        <span className={clases.link__title}>Productos</span>
                    {/* </div> */}
                </Link>
                <Link to='seccion/Preguntas' className={clases.link}>
                    {/* <div className={clases.link__elements}> */}
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={question} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
                        </span>
                        <span className={clases.link__title}>FAQS</span>
                    {/* </div> */}
                </Link>
                <Link to='seccion/User' className={clases.link}>
                    {/* <div className={clases.link__elements}> */}
                        <span className={clases.link__icon}>
                            <img className={clases.nav__img} src={userAdmin} width="192" height="192" fill="currentColor" viewBox="0 0 256 256" alt='Logos Nav'></img>
                        </span>
                        <span className={clases.link__title}>Usuario</span>
                    {/* </div> */}
                </Link>   
            </div>
        </div>

    )
}

export default Nav