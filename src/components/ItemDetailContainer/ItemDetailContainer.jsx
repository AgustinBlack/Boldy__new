import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import clases from './ItemDetailContainer.module.css'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getProductById } from '../../services/firebase/firestore/products'

const ItemDetailContainer = () => {

  const { productoId } = useParams([])

  const asyncFunction = () => getProductById(productoId)

  const { data: producto } = useAsync(asyncFunction, [productoId])

  console.log(producto)

  if(!producto) {
    return <h1>El producto no existe</h1>
  }
 
  return (
    <div className={clases.div}>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer