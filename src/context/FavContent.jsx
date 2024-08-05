// import { createContext, useContext } from "react"
// import { useState } from "react"
import { useNotification } from "./UseNotification"

// const FavContext = createContext()

// export const FavProvider = ({ children }) => {
//     const [fav, setFav] = useState([])
//     const { showNotification } = useNotification()

//     console.log(fav)

//     const isInFav = (id) => {
//         return fav.some(prod => prod.id === id)
//     }

//     const addItem = (prodToAdd) => {
//         if(!isInFav(prodToAdd.id)) {
//             setFav(prev => [...prev, { ...prodToAdd, img: Array.isArray(prodToAdd.img) ? prodToAdd.img : [prodToAdd.img] }]);
//             showNotification('El produto fue agregado a favoritos.', 'success')
//         } else (
//             showNotification('El producto ya esta en favoritos.', 'error')
//         )
//     }

//     const removeItem = (id) => {
//         const favUpdated = fav.filter(prod => prod.id !== id)
//         setFav(favUpdated)
//         showNotification('El producto fue removido de favoritos.', 'info')
//     }

//     const clearFav = () => {
//         setFav([])
//     }

//     return (
//         <FavContext.Provider value={{fav, addItem, removeItem, clearFav}}>
//             {children}
//         </FavContext.Provider>
//     )
// }

// export const useFav = () => {
//     return useContext(FavContext)
// }

import { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState([]);
    const { showNotification } = useNotification()


    useEffect(() => {
        const storedFav = JSON.parse(localStorage.getItem('favorites'));
        if (storedFav) {
            setFav(storedFav);
        }
    }, []);

    const isInFav = (id) => {
        return fav.some(prod => prod.id === id);
    };

    const addItem = (prodToAdd) => {
        if (!isInFav(prodToAdd.id)) {
            const newFav = [...fav, { ...prodToAdd, img: Array.isArray(prodToAdd.img) ? prodToAdd.img : [prodToAdd.img] }];
            setFav(newFav);
            localStorage.setItem('favorites', JSON.stringify(newFav));
            showNotification('El produto fue agregado a favoritos.', 'success')
        } else (
            showNotification('El producto ya esta en favoritos.', 'error')
        )
    };

    const removeItem = (id) => {
        const favUpdated = fav.filter(prod => prod.id !== id);
        setFav(favUpdated);
        localStorage.setItem('favorites', JSON.stringify(favUpdated));
        showNotification('El producto fue removido de favoritos.', 'info')
    };

    const clearFav = () => {
        setFav([]);
        localStorage.removeItem('favorites');
    };

    return (
        <FavContext.Provider value={{ fav, addItem, removeItem, clearFav, isInFav }}>
            {children}
        </FavContext.Provider>
    );
};

export const useFav = () => {
    return useContext(FavContext);
};
