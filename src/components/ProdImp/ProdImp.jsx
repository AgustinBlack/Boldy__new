import ProdImpSlider from "../ProdImpSlider/ProdImpSlider"
import clases from './ProdImp.module.css'

const ProdImp = ({ productos }) => {
    return (
        <div>
            <p className={clases.titulo}>Productos destacados</p>
            <div className={clases.container__padre}>
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
        </div>

    )
}

export default ProdImp
