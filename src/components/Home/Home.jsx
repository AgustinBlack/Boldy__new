import clases from './Home.module.css'
import corteiz from '../../assets/logos/corteiz-the-streetwear-studio.webp'
import essentials from '../../assets/logos/essentials-logo-freelogovectors.net_-640x400.webp'
import offWhite from '../../assets/logos/Off-White-Logo.webp'
import palmAngels from '../../assets/logos/Palm-Angels-Logo.webp'
import projectNude from '../../assets/logos/project-nude.webp'
import stussy from '../../assets/logos/Stussy-Logo.webp'
import supreme from '../../assets/logos/Supreme-Logo.webp'
import cajasZapatillas from '../../assets/imgsWeb/cajasZapatillasIlustracion.jpg'
import ProdImpContainer from '../ProdImpContainer/ProdImpContainer'
import FormUserSesion from '../FormUserSesion/FormUserSesion'
import iconSearch from '../../assets/icons/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import { useFiltrers } from '../../context/FiltrersProd'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { setSearchQuery, setIsSearching } = useFiltrers()
  const navigate = useNavigate()

  const handleOnSearch = (searchValue) => {
    setSearchQuery(searchValue);
    if (searchValue.trim()) {
      setIsSearching(true);
      navigate('seccion/Productos');
    }
  };

  const handleOnClick = () => {
    const searchInput = document.querySelector('.' + clases.input);
    const searchValue = searchInput.value.trim();
    handleOnSearch(searchValue);
  };

  return (
    <div>
      <div className={clases.slider}>
        <div className={clases.slide__track}>
          <div className={clases.slide}><img className={clases.logos} src={corteiz} alt="Corteiz"/></div>
          <div className={clases.slide}><img className={clases.logos} src={essentials} alt="Essentials"/></div>
          <div className={clases.slide}><img className={clases.logos} src={offWhite} alt="Off White"/></div>
          <div className={clases.slide}><img className={clases.logos} src={projectNude} alt="Project Nude"/></div>
          <div className={clases.slide}><img className={clases.logos} src={palmAngels} alt="Palm Angels"/></div>
          <div className={clases.slide}><img className={clases.logos} src={stussy} alt="Tussy"/></div>
          <div className={clases.slide}><img className={clases.logos} src={supreme} alt="Supreme"/></div>
        </div>
      </div>

      <section className={clases.container}>
        <section>
          <div className={clases.div__padre__ilustrativo}>
            <div className={clases.padre__ilustrativo}>
              <img className={clases.img__ilustrativa} src={cajasZapatillas} alt="Illustracion" rel='preload'/>
            </div>
            <div className={clases.txt__ilustrativo}>
              <h4>Texto texto</h4>
              <p>Texto</p>
            </div>
          </div>
        </section>

        <h2 className={clases.titulo}>Bienvenidos a BOLDY</h2>

        <div className={clases.txt__container}>
          <div className={clases.div__desc}>
            <p className={clases.desc}>En Boldy, nos dedicamos a la reventa de ropa y sneakers exclusivos, combinando la cultura del streetwear con el lujo. Nuestra misión es ofrecer acceso a las zapatillas más codiciadas y a las prendas de marcas de lujo, asegurando siempre la máxima autenticidad y calidad.</p>
          </div>
        </div>

        <div><ProdImpContainer/></div>

        <div className={clases.input__container}>
          <input type="text" placeholder='Buscar Productos...' className={clases.input}/>
          <img className={clases.img__icon} src={iconSearch} alt="Buscar" onClick={handleOnClick}/>
        </div>
        
        <FormUserSesion />
      </section>
    </div>
  )
}

export default Home