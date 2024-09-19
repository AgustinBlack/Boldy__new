import ProdImp from "../ProdImp/ProdImp";
import clases from './ProdImpContainer.module.css';
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import { useLoader } from "../../context/UseLoaderSpinner";
import { useEffect } from "react";

const ProdImpContainer = () => {
    const { typeId } = useParams();
    const asyncFunction = async () => {
        const products = await getProducts(typeId);
        setIsLoading(false);
        return products;
    };
    const { data: productos } = useAsync(asyncFunction, [typeId]);
    
    const { isLoading, setIsLoading } = useLoader();
    useEffect(() => {
        setIsLoading(true)
    }, [setIsLoading])

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

