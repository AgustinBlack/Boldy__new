// import React, { useEffect, useState } from 'react'
// import ItemDetail from '../ItemDetail/ItemDetail'
// import clases from './ItemDetailContainer.module.css'
// import { useParams } from 'react-router-dom'
// import { useAsync } from '../../hooks/useAsync'
// import { getProductById } from '../../services/firebase/firestore/products'
// import { useLoader } from '../../context/UseLoaderSpinner'

// const ItemDetailContainer = () => {
//   const { productoId } = useParams([])
//   const asyncFunction = () => getProductById(productoId)
//   const { data: producto } = useAsync(asyncFunction, [productoId])

//   const { isLoading } = useLoader();

//   if(!producto) {
//     return <h1>El producto no existe</h1>
//   }

//   return (
//     <div>
//       {isLoading ? (
//         <div className={clases.spinner}>
//           <div></div>   
//           <div></div>    
//           <div></div>    
//           <div></div>    
//           <div></div>    
//           <div></div>    
//           <div></div>    
//           <div></div>    
//           <div></div>    
//           <div></div>    
//         </div>
//       ) : (
//         <div className={clases.div}>
//           <ItemDetail {...producto}/>
//         </div>
//       )}      
//     </div>
//   )
// }

// export default ItemDetailContainer

import React, { useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import clases from './ItemDetailContainer.module.css';
import { useParams } from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';
import { getProductById } from '../../services/firebase/firestore/products';
import { useLoader } from '../../context/UseLoaderSpinner';

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const asyncFunction = async () => {
    setIsLoading(true);
    const producto = await getProductById(productoId);
    setIsLoading(false);
    return producto;
  };  
  const { data: producto } = useAsync(asyncFunction, [productoId]);
  
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    if (!producto) {
      setIsLoading(false);
    }
  }, [producto, setIsLoading]);

  if (!producto) {
    return <h1>El producto no existe</h1>;
  }

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
        <div className={clases.div}>
          <ItemDetail {...producto} />
        </div>
      )}      
    </div>
  );
};

export default ItemDetailContainer;