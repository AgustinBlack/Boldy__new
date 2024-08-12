import React from 'react';
import clases from './Preguntas.module.css';
import despliegaRta from '../../assets/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
import ocultarRta from '../../assets/remove_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
import { useState } from 'react';

const Preguntas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const preguntas = [
    { pregunta: "¿Cuales son los medios de pago?", respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus velit tempora perferendis delectus non nulla tenetur esse mollitia possimus totam excepturi, inventore deserunt placeat quasi autem beatae perspiciatis voluptatum?" },
    { pregunta: "¿Cómo realizo un seguimiento de mi pedido?", respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus velit tempora perferendis delectus non nulla tenetur esse mollitia possimus totam excepturi, inventore deserunt placeat quasi autem beatae perspiciatis voluptatum?" },
    { pregunta: "¿Cuál es la política de devoluciones?", respuesta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus velit tempora perferendis delectus non nulla tenetur esse mollitia possimus totam excepturi, inventore deserunt placeat quasi autem beatae perspiciatis voluptatum?" }
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <h3 className={clases.titulo}>Preguntas</h3>
      {preguntas.map((item, index) => (
        <div key={index} className={clases.faq}>
          <div className={clases.question} onClick={() => handleQuestionClick(index)}>
            <h4>{item.pregunta}</h4>
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