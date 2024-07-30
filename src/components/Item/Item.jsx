import clases from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({ id, img, nombre, precio }) => {
  return (
    <div className={clases.div__padre}>
      <div className={clases.div}>
        <img className={clases.img} src={img} alt="" />
        <div className={clases.div__info}>
          <h3 className={clases.info__nombre}>{nombre}</h3>
          <p className={clases.info__precio}>${precio}</p>
          <div className={clases.div__btn}>
              <Link className={clases.btn} to={`/detail/${id}`}>Ver detalle</Link>
          </div>
        </div>
      </div>
    </div>

    // <div className={clases.div__padre}>
    //   <div className={clases.div}>
    //     <img className={clases.img} src="https://assets.adidas.com/images/w_600,f_auto,q_auto/9a5b9d63cc9c42939a44ae920127cb49_9366/Zapatillas_adi2000_Negro_GX4634_01_standard.jpg" alt="Adi2000" />
    //     <div className={clases.div__info}>
    //       <h4 className={clases.info__nombre}>Adi2000</h4>
    //       <p className={clases.info__precio}>$100 USD</p>
    //       <div className={clases.div__btn}>
    //         <Link className={clases.btn}>Ver detalle</Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={clases.div}>
    //     <img className={clases.img} src="https://nikearprod.vtexassets.com/arquivos/ids/823957-800-800?width=800&height=800&aspect=true" alt="Nike Dunk Low SE" />
    //     <div className={clases.div__info}>
    //       <h4 className={clases.info__nombre}>Nike Dunk Low SE</h4>
    //       <p className={clases.info__precio}>$120 USD</p>
    //       <div className={clases.div__btn}>
    //         <Link className={clases.btn}>Ver detalle</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Item
