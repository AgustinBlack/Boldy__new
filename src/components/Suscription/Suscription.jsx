import React from 'react';
import { db } from '../../services/firebase/firebaseConfig';
import { useState } from 'react';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import SuscriptionForm from '../SuscriptionForm/SuscriptionForm';

const Suscription = () => {
    const [suscriptionId, setSuscriptionId] = useState(null);

    const createSuscriptor = async ({ usuario, email }) => {
        try {
            const objSuscriptor = {
                usuario,
                email,
                date: Timestamp.fromDate(new Date())
            };
            const docRef = await addDoc(collection(db, "suscriptores"), objSuscriptor);
            setSuscriptionId(docRef.id);
            console.log("Suscriptor agregado con ID: ", docRef.id);
        } catch (error) {
            console.log("Error agregando el suscriptor: ", error);
        }
    };

    return (
        <div>
            <SuscriptionForm onConfirm={createSuscriptor} />
            {suscriptionId && <p>¡Gracias por suscribirte! Te mantendremos al tanto de novedades.</p>}
        </div>
    );
}

export default Suscription;