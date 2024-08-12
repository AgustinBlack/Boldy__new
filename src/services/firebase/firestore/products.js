import { db } from "../firebaseConfig";
import { storage } from "../firebaseConfig";
import { collection, query, getDocs, where, getDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref } from "@firebase/storage";

export const getProducts = (typeId) => {
    const productosColeccion = typeId
      ? query(collection(db, 'productos'), where('tipo', '==', typeId))
      : collection(db, 'productos')
      
    return getDocs(productosColeccion)
      .then(async(querySnapshot) => {
        const productosAdaptados = querySnapshot.docs.map(doc => {
          const campos = doc.data()
          return { id: doc.id, ...campos }
        })

        const productosConImagenes = await Promise.all(productosAdaptados.map(async(producto) => {
          try {
            const img = await getDownloadURL(ref(storage, `${producto.img[0]}`))
            return { ...producto, img }
          } catch (error) {
            console.error(error)
            return { ...producto }
          }
        }))
        return productosConImagenes
      })
}

export const getProductById = async (productoId) => {
  const productoDoc = doc(db, 'productos', productoId);

  try {
      const queryDocumentSnapshot = await getDoc(productoDoc);
      const campos = queryDocumentSnapshot.data();
      const productoAdaptado = { id: queryDocumentSnapshot.id, ...campos };

      const imgUrls = await Promise.all(
          (productoAdaptado.img || []).map(async (imgPath) => {
              try {
                  return await getDownloadURL(ref(storage, `${imgPath}`));
              } catch (error) {
                  console.error(`Error fetching image for path ${imgPath}:`, error);
                  return null;
              }
          })
      );

      const validImgUrls = imgUrls.filter(url => url !== null);

      return { ...productoAdaptado, img: validImgUrls };
  } catch (error) {
      console.error(`Error fetching product ${productoId}:`, error);
      throw error;
  }
};