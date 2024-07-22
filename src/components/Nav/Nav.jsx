import clases from './Nav.module.css'
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className={clases.div__nav}>
      <Link to='/'><img src="" alt=""/></Link>
      <div className={clases.div__btn}>
        <Link to='seccion/Nosotros' className={clases.btn__nav}>Nosotros</Link>
        <Link to='seccion/Productos' className={clases.btn__nav}>Productos</Link>
        <Link to='seccion/Guardados' className={clases.btn__nav}>Guardados</Link>
      </div>
    </div>
  )
}

export default Nav
