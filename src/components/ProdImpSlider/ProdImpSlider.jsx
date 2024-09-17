import { Link, useNavigate } from 'react-router-dom'
import clases from './ProdImpSlider.module.css'

const ProdImpSlider = ({ id, img, nombre }) => {
    const navigate = useNavigate()

    const handleOnClick = () => {
        setTimeout(() => {
            navigate(`/detail/${id}`)
        }, 1000)
    }

    return (
        <Link onClick={handleOnClick}>
            <div className={clases.container}>
                <div className={clases.container__img}>
                    <img className={clases.img} src={img} alt={nombre}/>
                </div>
                <p className={clases.nombre}>{nombre}</p>
            </div>
        </Link>
    )
}

export default ProdImpSlider
