import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync";
import { useFiltrers } from "../../context/FiltrersProd";
import { useLoader } from '../../context/UseLoaderSpinner'
import clases from './ItemListContainer.module.css'
import { useEffect } from "react";

const ItemListContainer = () => {
    
  const { typeId } = useParams()
  const asyncFunction = async () => {
    const products = await getProducts(typeId);
    setIsLoading(false);
    return products;
  };
  const { data: productos } = useAsync(asyncFunction, [typeId])

  const { sortProducts, filtrerProducts, filterByBrand, selectBrand } = useFiltrers()
  const filteredByBrand = filterByBrand(productos, selectBrand)
  const filtreredProducts = sortProducts(filtrerProducts(filteredByBrand))

  const { isLoading, setIsLoading } = useLoader()

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
          <ItemList productos={filtreredProducts} children={'Productos'}/>
        )}
    </div>
  )
}

export default ItemListContainer
