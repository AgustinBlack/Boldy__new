import clases from './Nav.module.css'
import favorito from '../../assets/favorite_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import inicio from '../../assets/home_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import productos from '../../assets/shopping_bag_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    // <div className={clases.div__nav}>
    //   <Link to='/'><img src="" alt=""/></Link>
    //   <div className={clases.div__btn}>
    //     <Link to='seccion/Nosotros' className={clases.btn__nav}>Nosotros</Link>
    //     <Link to='type/typeId' className={clases.btn__nav}>Productos</Link>
    //     <Link to='seccion/Guardados' className={clases.btn__nav}>Guardados</Link>
    //   </div>
    // </div>
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
    </div>
  )
}

export default Nav
