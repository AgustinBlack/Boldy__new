import Item from "../Item/Item";

const ItemList = ({ productos }) => {

  console.log(productos);

  return (
    <div>
        {
          productos.map(prod => {
            return (
              <Item key={prod.id} {...prod}/>
            )
        })}
    </div>
  );
};

export default ItemList