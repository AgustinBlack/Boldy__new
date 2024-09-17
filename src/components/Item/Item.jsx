import clases from "./Item.module.css"
import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, img, nombre, precio }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    setTimeout(() => {
        navigate(`/detail/${id}`)
    }, 1000)
  }

  return (
    <div className={clases.div__padre}>
      <div className={clases.div}>
        <img className={clases.img} src={img} alt={nombre} />
        <div className={clases.div__info}>
          <h5 className={clases.info__nombre}>{nombre}</h5>
          <p className={clases.info__precio}>${precio}</p>
          <div className={clases.div__btn}>
              <Link className={clases.btn} onClick={handleOnClick}>Ver detalle</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
