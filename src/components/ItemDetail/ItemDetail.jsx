import clases from './ItemDetail.module.css'
import favorito from '../../assets/icons8-me-gusta-24.png'
import agregadoAFav from '../../assets/icons8-heart-24.png'
import { useState, useEffect } from 'react';
import { useFav } from '../../context/FavContent';

const ItemDetail = ({ img = [], nombre, precio, talle, genero, tipo, id }) => {
  const imagesArray = Array.isArray(img) ? img : [img];

  const [mainImg, setMainImg] = useState(imagesArray[0])
  const { addItem } = useFav()
  const [isFavourite, setIsFavourite] = useState(true)

  useEffect(() => {
    if (imagesArray.length > 0) {
      setMainImg(imagesArray[0]);
    }
  }, [imagesArray]);

  const handleClickImg = (imgSrc) => {
    setMainImg(imgSrc)
  }

  const handleOnAdd = () => {
    const objProdToFav = {
      id, nombre, precio, talle, img: imagesArray
    }
    addItem(objProdToFav)
    setIsFavourite(false)
  }

  return (
    <div className={clases.div__padre}>
      {mainImg && <img className={clases.img} src={mainImg} alt={nombre} />}

      <div className={clases.carrusel}>
        {imagesArray.length > 0 && (
          <div className={clases.carrusel}>
            {imagesArray.map((prodImg, index) => (
              <div key={index} className={`${clases.carrusel__item} ${mainImg === prodImg ? clases.active : ''}`} onClick={() => handleClickImg(prodImg)}>
                <img className={clases.carrusel__img} src={prodImg} alt={`${nombre} ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={clases.div__info}>
        <div className={clases.nombre__btn}>
          <h3 className={clases.info__nombre}>{nombre}</h3>
          <img className={clases.btn__favorito} src={isFavourite ? favorito : agregadoAFav} alt="" onClick={handleOnAdd} />
        </div>
        <p className={clases.info}>${precio}</p>
        <p className={clases.info}><span className={clases.info__span}>Size:</span> {talle}</p>
        <p className={clases.info}><span className={clases.info__span}>Genre:</span> {genero}</p>
        <p className={clases.info}><span className={clases.info__span}>Footwear:</span> {tipo}</p>
      </div>
      <div className={clases.div__btn}>
      <a className={clases.btn} href="https://api.whatsapp.com/send?phone=541144758749&text=Hola%20!%20Quiero%20más%20información%20sobre...">Contactar al WhatsApp</a>
      </div>
    </div>
  )
}

export default ItemDetail