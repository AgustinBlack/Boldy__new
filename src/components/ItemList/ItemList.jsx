import clases from './ItemList.module.css'
import Item from "../Item/Item";

const ItemList = ({ productos, children }) => {
  return (
    <div>
      <h3 className={clases.titulo}>{children}</h3>
      <div className={clases.div}>
        {
          productos.map(prod => {
            return (
              <Item key={prod.id} {...prod}/>
            )
        })}
      </div>
    </div>
  );
};

export default ItemList