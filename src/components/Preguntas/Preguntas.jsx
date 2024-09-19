import React from 'react';
import clases from './Preguntas.module.css';
import despliegaRta from '../../assets/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp';
import ocultarRta from '../../assets/icons/remove_24dp_000000_FILL0_wght400_GRAD0_opsz24.webp';
import { useState } from 'react';

const Preguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const preguntas = [
    { pregunta: "¿Los productos son originales?", respuesta: "Sí, todos los productos que ofrecemos son 100% originales. Cada artículo es cuidadosamente verificado para garantizar su autenticidad y calidad. Puedes confiar en que estás comprando productos auténticos y de primera calidad." },
    { pregunta: "¿Puedo realizar cambios o devoluciones?", respuesta: "No, en este momento no aceptamos cambios ni devoluciones. Te recomendamos revisar cuidadosamente tu compra antes de finalizar para asegurarte de que estás satisfecho con tu selección." },
    { pregunta: "¿Realizan encargos?", respuesta: "Sí, realizamos encargos. Para obtener más información sobre cómo realizar un encargo y los detalles asociados, por favor consulta nuestra sección de Encargos en el sitio web" },
    { pregunta: '¿Qué métodos de pago aceptan?', respuesta: 'Aceptamos varios métodos de pago para tu comodidad: Transferencia bancaria, Mercado Pago, Efectivo (dólar/euro/pesos), PayPal (+5%), Criptomonedas' },
    { pregunta: '¿A cuánto toman el dólar para pagar en pesos?', respuesta: 'El valor del dólar para pagos en pesos se calcula al tipo de cambio del dólar blue del día. Esto nos permite mantener precios competitivos y transparentes. Te recomendamos consultar el tipo de cambio vigente antes de realizar tu compra.' }
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={clases.container}>
      {preguntas.map((item, index) => (
        <div key={index} className={clases.faq}>
          <div className={clases.question} onClick={() => handleQuestionClick(index)}>
            <p>{item.pregunta}</p>
            <img
              className={clases.imgSuma}
              src={activeIndex === index ? ocultarRta : despliegaRta}
              alt="Toggle Icon"
            />
          </div>
          <div className={`${clases.answer} ${activeIndex === index ? clases.show : ''}`}>
            <p>{item.respuesta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preguntas;