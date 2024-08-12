import clases from './Nav.module.css'
import favorito from '../../assets/favorite_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import inicio from '../../assets/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import productos from '../../assets/shopping_bag_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import boldy from '../../assets/boldy.png'
import question from '../../assets/help_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div>
        <div className={clases.div__logo}>
            <img className={clases.logo} src={boldy} alt="" />
        </div>
        <div className={clases.menu}>
            <Link to='seccion/Nosotros' className={clases.link}>
                <span className={clases.link__icon}>
                    <img className={clases.nav__img} src={inicio} width="192" height="192" fill="currentColor" viewBox="0 0 256 256"></img>
                </span>
                <span className={clases.link__title}>Nosotros</span>
            </Link>
            <Link to='type/typeId' className={clases.link}>
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
                <span className={clases.link__title}>Preguntas</span>
            </Link>
        </div>        
    </div>

  )
}

export default Nav
