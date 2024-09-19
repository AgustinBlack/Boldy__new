import ProdImp from "../ProdImp/ProdImp";
import clases from './ProdImpContainer.module.css';
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import { useLoader } from "../../context/UseLoaderSpinner";

const ProdImpContainer = () => {
    const { typeId } = useParams();
    const asyncFunction = () => getProducts(typeId)
    const { data: productos } = useAsync(asyncFunction, [typeId]);
    
    const { isLoading } = useLoader();

    return (
        <div>
            {isLoading ? (
                <div className={clases.spinner}>
                    <div></div>   
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                    <div></div>    
                </div>
            ) : (
                <ProdImp productos={productos} children={'Productos Destacados'} />
            )}
        </div>
    );
};

export default ProdImpContainer;

