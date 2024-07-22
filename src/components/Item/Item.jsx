import { Link } from "react-router-dom"

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div>
        <img src={img} alt="" />
        <h5>{nombre}</h5>
        <p>{precio}</p>
        <div>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    </div>
  )
}

export default Item
