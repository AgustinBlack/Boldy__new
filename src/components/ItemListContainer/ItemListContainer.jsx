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

  const { isSearching, setIsSearching, sortProducts, filterProducts, filterByBrand, selectBrand, setSearchQuery, priceRange, setPriceRange, filterByPrice } = useFiltrers()

  const filteredByPrice = filterByPrice(productos)
  const filteredByBrand = filterByBrand(filteredByPrice)
  const filteredBySearch = filterProducts(filteredByBrand)
  const filtreredProducts = sortProducts(filteredBySearch)

  const { isLoading, setIsLoading } = useLoader()

  useEffect(() => {
    setIsLoading(true);
    if (!isSearching) {
      setSearchQuery('');
    }
    return () => {
      setIsSearching(false);
    };
  }, [setIsLoading, setSearchQuery, isSearching, setIsSearching]);

  return (
    <div>
      {isLoading ? (
        <div className={clases.container__spinner}>
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
          </div>          
        </div>

      ) : (
        <ItemList productos={filtreredProducts} children={'Productos'} />
      )}
    </div>
  )
}

export default ItemListContainer