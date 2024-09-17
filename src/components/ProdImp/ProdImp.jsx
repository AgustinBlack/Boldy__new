import ProdImpSlider from "../ProdImpSlider/ProdImpSlider"
import clases from './ProdImp.module.css'

const ProdImp = ({ productos }) => {
    return (
        <div className={clases.container__padre}>
            <p className={clases.titulo}>Productos destacados</p>
            <div className={clases.container}>
                {                   
                    productos.filter(prod => prod.destacado === "Si").map(prod => {
                        return (
                            <ProdImpSlider key={prod.id} {...prod} />
                        )
                    })                    
                }
            </div>
        </div>
    )
}

export default ProdImp
