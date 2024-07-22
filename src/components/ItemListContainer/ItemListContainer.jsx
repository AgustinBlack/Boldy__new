import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../services/firebase/firestore/products"
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"


const ItemListContainer = () => {

  const { typeId } = useParams()

  const asyncFuntion = () => getProducts(typeId)

  const { data: productos = [] } = useAsync(asyncFuntion, [typeId])

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer
