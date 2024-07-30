import clases from './ItemDetail.module.css'
import favorito from '../../assets/favorite_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import { Link } from 'react-router-dom'

const ItemDetail = ({ img = [], nombre, precio, talle, genero, tipo }) => {
  const imagesArray = Array.isArray(img) ? img : [img];

  return (
    <div className={clases.div__padre}>
      <img className={clases.img} src={imagesArray[0]} alt={nombre} />

      <div className={clases.carrusel}>
        {imagesArray.length > 0 && (
            <div className={clases.carrusel}>
                {imagesArray.map((prodImg, index) => (
                    <div key={index} className={clases.carrusel__item}>
                        <img className={clases.carrusel__img} src={prodImg} alt={`${nombre} ${index + 1}`} />
                    </div>
                ))}
            </div>
        )}
      </div>

      <div className={clases.div__info}>
        <div className={clases.nombre__btn}>
          <h3 className={clases.info__nombre}>{nombre}</h3>
          <img className={clases.btn__favorito} src={favorito} alt="" />
        </div>
        <p className={clases.info}>${precio}</p>
        <p className={clases.info}><span className={clases.info__span}>Size:</span> {talle}</p>
        <p className={clases.info}><span className={clases.info__span}>Genre:</span> {genero}</p>
        <p className={clases.info}><span className={clases.info__span}>Footwear:</span> {tipo}</p>
      </div>
      <div className={clases.div__btn}>
        <Link className={clases.btn}>Contactar al WhatsApp</Link>
      </div>
    </div>
  )
}

export default ItemDetail
