import clases from './ItemList.module.css'
import Item from "../Item/Item";
import ProductFilters from '../ProductFilters/ProductFilters';

const ItemList = ({ productos }) => {
  return (
    <div>
      <div className={clases.container__prods}>
        <ProductFilters/>
        <div className={clases.div}>
          {
            productos.map(prod => {
              return (
                <Item key={prod.id} {...prod}/>
              )
            })
          }
        </div>        
      </div>
    </div>
  );
};

export default ItemList