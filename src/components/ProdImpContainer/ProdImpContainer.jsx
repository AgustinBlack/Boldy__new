import ProdImp from "../ProdImp/ProdImp";
import clases from './ProdImpContainer.module.css';
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";
import { useState, useEffect } from "react";

const ProdImpContainer = () => {
    const { typeId } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const loadingDelay = 2000;

    const asyncFunction = async () => {
        const products = await getProducts(typeId);
        return products;
    };

    const { data: productos } = useAsync(asyncFunction, [typeId]);

    useEffect(() => {
        if (productos) {
            setTimeout(() => {
                setIsLoading(false);
            }, loadingDelay);
        }
    }, [productos]);

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

