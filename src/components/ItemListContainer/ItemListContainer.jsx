import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = () => {
    
  const { typeId } = useParams()
  const asyncFuntion = () => getProducts(typeId)
  const { data: productos } = useAsync(asyncFuntion, [typeId])

  console.log(productos);
  
  return (
    <div>
        <ItemList productos={productos} children={'Bienvenidos'}/>
    </div>
  )
}

export default ItemListContainer
