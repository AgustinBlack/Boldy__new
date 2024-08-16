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
        <div className={clases.txt__container}>
          <div className={clases.div__desc}>
            <p className={clases.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores expedita reprehenderit voluptatum, magnam at nostrum eveniet, unde recusandae iure numquam maxime sed ex deserunt perspiciatis. Odit a dignissimos tempore obcaecati?</p>
            {/* <img className={clases.img} src={buzoE} alt="" /> */}
          </div>
          <div className={clases.div__desc}>
            {/* <img className={clases.img} src={buzoNP} alt="" /> */}
            <p className={clases.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores expedita reprehenderit voluptatum, magnam at nostrum eveniet, unde recusandae iure numquam maxime sed ex deserunt perspiciatis. Odit a dignissimos tempore obcaecati?</p>
          </div>
        </div>
        <Suscription />
      </section>
    </div>

  )
}

export default Us
