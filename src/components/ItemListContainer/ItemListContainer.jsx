import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync";
import { useFiltrers } from "../../context/FiltrersProd";

const ItemListContainer = () => {
    
  const { typeId } = useParams()
  const asyncFunction = () => getProducts(typeId)
  const { data: productos } = useAsync(asyncFunction, [typeId])

  const { sortProducts, filtrerProducts, filterByBrand, selectBrand } = useFiltrers()

  const filteredByBrand = filterByBrand(productos, selectBrand)
  const filtreredProducts = sortProducts(filtrerProducts(filteredByBrand))
  
  return (
    <div>
        <ItemList productos={filtreredProducts} children={'Productos'}/>
    </div>
  )
}

export default ItemListContainer
