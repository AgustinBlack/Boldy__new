import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync";
import { useFiltrers } from "../../context/FiltrersProd";

const ItemListContainer = () => {
    
  const { typeId } = useParams()
  const asyncFunction = () => getProducts(typeId)
  const { data: productos } = useAsync(asyncFunction, [typeId])

  const { sortProducts, filtrerProducts } = useFiltrers()

  const filtreredProducts = sortProducts(filtrerProducts(productos))

  console.log(filtreredProducts);
  
  return (
    <div>
        <ItemList productos={filtreredProducts} children={'Bienvenidos'}/>
    </div>
  )
}

export default ItemListContainer
