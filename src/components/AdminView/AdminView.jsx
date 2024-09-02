import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/firebase/firestore/products';
import { addDoc, deleteDoc, doc, updateDoc, collection } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable } from '@firebase/storage';
import { db } from '../../services/firebase/firebaseConfig';
import { storage } from '../../services/firebase/firebaseConfig';
import removeProd from '../../assets/icons/delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import editProd from '../..//assets/icons/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import clases from './AdminView.module.css'

function AdminView() {
    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newGenre, setNewGenre] = useState('');
    const [newFootwear, setNewFootWear] = useState('');
    const [newSize, setNewSize] = useState('');
    const [imageUrls, setImageUrls] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        const getProductsData = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        getProductsData();
    }, []);

    const handleAddOrUpdateProduct = async () => {
        if (!newProductName || !newPrice || !newGenre || !newFootwear || !newSize || imageUrls.length === 0) {
            alert('Por favor, completa todos los campos antes de agregar o actualizar el producto.');
            return;
        }
        if (editingProductId) {
            const productRef = doc(db, "productos", editingProductId);
            await updateDoc(productRef, {
                nombre: newProductName,
                precio: newPrice,
                genero: newGenre,
                tipo: newFootwear,
                talle: newSize,
                img: imageUrls
            });
            setEditingProductId(null);
        } else {
            await addDoc(collection(db, "productos"), {
                nombre: newProductName,
                precio: newPrice,
                genero: newGenre,
                tipo: newFootwear,
                talle: newSize,
                img: imageUrls
            });
        }

        setNewProductName('');
        setNewPrice('');
        setNewGenre('');
        setNewFootWear('');
        setNewSize('');
        setImageUrls([]);
        const updatedProducts = await getProducts();
        setProducts(updatedProducts);
    };

    const handleDeleteProduct = async (id) => {
        await deleteDoc(doc(db, "productos", id));
        const updatedProducts = await getProducts();
        setProducts(updatedProducts);
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        const uploadPromises = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const imageRef = ref(storage, `img/${file.name}`);
            const uploadTask = uploadBytesResumable(imageRef, file);

            const uploadPromise = new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        // Opcional: progreso de la subida
                    },
                    (error) => {
                        reject(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then((downloadURL) => {
                                resolve(downloadURL);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    }
                );
            });

            uploadPromises.push(uploadPromise);
        }

        Promise.all(uploadPromises)
            .then((urls) => {
                setImageUrls(urls);
            })
            .catch((error) => {
                console.error('Error al subir imágenes:', error);
            });
    };

    const handleEditProduct = (product) => {
        setNewProductName(product.nombre);
        setNewPrice(product.precio);
        setNewGenre(product.genero);
        setNewFootWear(product.tipo);
        setNewSize(product.talle);
        setImageUrls([product.img]);
        setEditingProductId(product.id);
    };

    return (
        <div className={clases.container}>
            <h2 className={clases.titulo}>Gestor de Productos</h2>
            <div className={clases.container__prod__name}>
                <input
                    className={clases.inputs}
                    type="text"
                    placeholder="Nombre del producto"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />
                <input
                    className={clases.inputs}
                    type="number"
                    placeholder="Precio del producto"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                />
                <input
                    className={clases.inputs}
                    type="text"
                    placeholder="Género"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                />
                <input
                    className={clases.inputs}
                    type="text"
                    placeholder="Tipo de producto"
                    value={newFootwear}
                    onChange={(e) => setNewFootWear(e.target.value)}
                />
                <input
                    className={clases.inputs}
                    type="number"
                    placeholder="Talle del producto"
                    value={newSize}
                    onChange={(e) => setNewSize(e.target.value)}
                />
                <input
                    className={clases.input__img}
                    type="file"
                    accept="image/jpeg, image/png"
                    multiple
                    onChange={handleImageChange}
                />
                <div className={clases.container__btn}>
                    <button className={clases.btn__add} onClick={handleAddOrUpdateProduct}>
                        {editingProductId ? 'Actualizar Producto' : 'Agregar Producto'}
                    </button>
                </div>
            </div>
            <ul className={clases.lista}>
                {products.map((product) => (
                    <li className={clases.prod__lista} key={product.id}>
                        {product.nombre}
                        <div className={clases.div__btns}>
                            <img
                                className={clases.btn__edit}
                                src={editProd}
                                onClick={() => handleEditProduct(product)}
                            />
                            <img
                                className={clases.btn__delete}
                                src={removeProd}
                                onClick={() => handleDeleteProduct(product.id)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminView;