import { createContext, useContext, useState } from "react";

const FiltrersContext = createContext()

export const FiltrersProvider = ({ children }) => {
    const [sortBy, setSortBy] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortProducts = (prod) => {
        let sortedProducts = [...prod]
        switch (sortBy) {
            case 'price_asc':
                sortedProducts.sort((a, b) => a.price - a.price)
                break;
            case 'price_desc':
                sortedProducts.sort((a, b) => b.price - a.price)
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

    return (
        <FiltrersContext.Provider value={{ sortBy, setSortBy, searchQuery, setSearchQuery, sortProducts, filtrerProducts }}>
            {children}
        </FiltrersContext.Provider>
    )
}

export const useFiltrers = () => useContext(FiltrersContext)