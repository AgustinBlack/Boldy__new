import Suscription from '../Suscription/Suscription'
import clases from './Us.module.css'
import corteiz from '../../assets/logos/corteiz-the-streetwear-studio.png'
import essentials from '../../assets/logos/essentials-logo-freelogovectors.net_-640x400.png'
import offWhite from '../../assets/logos/Off-White-Logo.png'
import palmAngels from '../../assets/logos/Palm-Angels-Logo.png'
import projectNude from '../../assets/logos/project nude.png'
import stussy from '../../assets/logos/Stussy Logo.png'
import supreme from '../../assets/logos/Supreme Logo.png'
import buzoE from '../../assets/imgsWeb/buzoEssentials.webp'
import buzoNP from '../../assets/imgsWeb/buzoNudeProject.webp'
import iconMail from '../../assets/icons/mail_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import iconQuote from '../../assets/icons/payments_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import iconCheck from '../../assets/icons/check_circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import FormUserSesion from '../FormUserSesion/FormUserSesion'

const Us = () => {
  return (
    <div>
      <div className={clases.slider}>
        <div className={clases.slide__track}>
          <div className={clases.slide}><img className={clases.logos} src={corteiz} alt="" /></div>
          <div className={clases.slide}><img className={clases.logos} src={essentials} alt="" /></div>
          <div className={clases.slide}><img className={clases.logos} src={offWhite} alt="" /></div>
          <div className={clases.slide}><img className={clases.logos} src={projectNude} alt="" /></div>
          <div className={clases.slide}><img className={clases.logos} src={palmAngels} alt="" /></div>
          <div className={clases.slide}><img className={clases.logos} src={stussy} alt="" /></div>
          <div className={clases.slide}><img className={clases.logos} src={supreme} alt="" /></div>
        </div>
      </div>
      
      <section className={clases.container}>
        <h2 className={clases.titulo}>Bienvenidos a BOLDY</h2>
        <div className={clases.txt__container}>
          <div className={clases.div__desc}>
            <p className={clases.desc}>En Boldy, nos dedicamos a la reventa de ropa y sneakers exclusivos, combinando la cultura del streetwear con el lujo. Nuestra misión es ofrecer acceso a las zapatillas más codiciadas y a las prendas de marcas de lujo, asegurando siempre la máxima autenticidad y calidad.</p>
            {/* <img className={clases.img} src={buzoE} alt="" /> */}
          </div>
          <div className={clases.div__desc}>
            {/* <img className={clases.img} src={buzoNP} alt="" /> */}
            <p className={clases.desc}>Somos más que una tienda en línea; somos un espacio donde la moda urbana cobra vida. Cada producto en nuestra tienda, desde sneakers de edición limitada hasta colaboraciones únicas de streetwear, ha sido cuidadosamente seleccionado y verificado para garantizar que sea 100% original.</p>
          </div>
        </div>
        {/* <FormUserSesion/> */}
        <div >
          <h2 className={clases.titulo}>Encargos</h2>
          <div className={clases.txt__container}>
            <div className={clases.div__desc}>
              <p className={clases.desc}>En Boldy, estamos comprometidos a ofrecerte una solución para conseguir cualquier producto que desees, incluso si es complicado de encontrar en Argentina o si estás buscando un mejor precio.</p>
            </div>
            <div className={clases.div__desc}>
              <p className={clases.desc}>Realizamos encargos especiales desde Estados Unidos hacia Argentina para que puedas acceder a los artículos que más te interesan. El proceso es simple y eficiente:</p>
            </div>            
          </div>
          <div className={clases.encargos__container}>
            <div className={clases.div__procesos}>
              <img className={clases.img__procesos} src={iconMail} alt="Send" />
              <h4>Envíanos tu 
                  <br/> 
                  Solicitud
              </h4>
              <p>Proporciona un enlace o una foto de referencia del producto que deseas, especificando el talle si es necesario.</p>
            </div>
            <div className={clases.div__procesos}>
              <img className={clases.img__procesos} src={iconQuote} alt="Quote" />
              <h4>Cotización Personalizada</h4>
              <p>Nosotros te enviaremos una cotización detallada del producto, incluyendo costos de envío y cualquier otro detalle relevante.</p>
            </div>
            <div className={clases.div__procesos}>
              <img className={clases.img__procesos} src={iconCheck} alt="Check" />
              <h4>Confirmación del Pedido</h4>
              <p>Si estás de acuerdo con la cotización, confirma tu pedido y comenzaremos a gestionarlo de inmediato.</p>
            </div>
          </div>
          <div className={clases.txt__container}>
              <div className={clases.div__desc}>
                <p className={clases.desc}>Una vez confirmado, tu pedido llegará a tus manos en aproximadamente 2 a 3 semanas. En Boldy, nos aseguramos de que cada paso del proceso sea transparente y que recibas el producto que has solicitado con la mejor calidad y al mejor precio posible.</p>
              </div>
              <div className={clases.div__desc}>
                <p className={clases.desc}>Para más detalles o para realizar un encargo, no dudes en contactarnos. ¡Estamos aquí para ayudarte a conseguir todo lo que necesitas!</p>
                <div className={clases.div__btn}>
                  <a className={clases.btn} href="https://api.whatsapp.com/send?phone=541144758749&text=Hola%20!%20Quiero%20más%20información%20sobre...">Contactar al WhatsApp</a>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Us