import { useState, useEffect } from "react"

export const useAsync = (asyncFunction, dependencias = []) => {
    const [data, setData] = useState([])

    useEffect(() => {
        asyncFunction()
            .then(data =>{
                setData(data)
            })
    }, dependencias)

    return {
        data,
    }
}