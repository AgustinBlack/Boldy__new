import { createContext, useContext, useState } from "react";

const FiltrersContext = createContext()

export const FiltrersProvider = ({ children }) => {
    const [sortBy, setSortBy] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectBrand, setSelectBrand] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [priceRange, setPriceRange] = useState({ min: 50, max: 500 })

    const sortProducts = (prod) => {
        let sortedProducts = [...prod]
        switch (sortBy) {
            case 'price_asc':
                sortedProducts.sort((a, b) => a.precio - b.precio)
                break;
            case 'price_desc':
                sortedProducts.sort((a, b) => b.precio - a.precio)
                break;
            default:
                break;
        }
        return sortedProducts
    }

    const filtrerProducts = (prod) => {
        return prod.filter(product => 
            product.nombre.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }

    const filterByBrand = (prod) => {
        if (!selectBrand) return prod
        return prod.filter(product => product.marca === selectBrand)
    }

    const filterByPrice = (prod) => {
        return prod.filter(product => 
            product.precio >= priceRange.min && product.precio <= priceRange.max
        );
    }

    return (
        <FiltrersContext.Provider value={{ setPriceRange, filterByPrice, isSearching, setIsSearching, sortBy, setSortBy, searchQuery, setSearchQuery, sortProducts, filtrerProducts, selectBrand, setSelectBrand, filterByBrand}}>
            {children}
        </FiltrersContext.Provider>
    )
}

export const useFiltrers = () => useContext(FiltrersContext)