import ProdImp from "../ProdImp/ProdImp";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ProdImpContainer = () => {
    
    const { typeId } = useParams()
    const asyncFunction = () => getProducts(typeId)
    const { data: productos } = useAsync(asyncFunction, [typeId])

    return (
        <div>
            <ProdImp productos={productos} children={'Productos Destacados'} />
        </div>
    )
}

export default ProdImpContainer
