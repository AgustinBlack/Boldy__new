import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const LoaderSpinnerContext = createContext()

export const UseLoaderSpinnerProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const loadingDelay = 2000

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, loadingDelay);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LoaderSpinnerContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderSpinnerContext.Provider>
    )
}

export const useLoader = () => {
    return useContext(LoaderSpinnerContext)
}