import { db } from "../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

export const getProducts = (typeId) => {
    const productosColeccion = typeId
    ? query(collection(db, "productos"), where('tipo', '==', typeId))
    : collection(db, "productos");
  
    return getDocs(productosColeccion)
        .then(querySnapshot => {
            const productosAdaptados = querySnapshot.docs.map(doc => {
                const campos = doc.data();
                return { id: doc.id, ...campos };
        });
        return productosAdaptados;
        })
        .catch((error) => console.error(error));
};