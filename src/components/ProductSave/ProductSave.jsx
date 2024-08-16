import clases from './ProductSave.module.css'
import { useFav } from "../../context/FavContent"
import removeProd from '../../assets/icons/delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'

const ProductSave = () => {
  const { fav, removeItem } = useFav();

  return (
    <div className={clases.fav__container}>
      {fav.length === 0 ? (
        <p className={clases.fav__vacio}>No hay productos en favoritos.</p>
      ) : (
        fav.map(product => (
          <div key={product.id} className={clases.fav__item}>
            {product.img && product.img[0] && (
              <img src={product.img[0]} alt={product.nombre} className={clases.fav__img} />
            )}
            <div className={clases.fav__details}>
              <div>
                <h4>{product.nombre}</h4>
                <p className={clases.fav__precioTalle}>${product.precio}</p>
                <p className={clases.fav__precioTalle}>Talle: {product.talle}</p>
              </div>
                <button onClick={() => removeItem(product.id)} className={clases.fav__remove}><img className={clases.remove__img} src={removeProd} alt='Remove'/></button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductSave
