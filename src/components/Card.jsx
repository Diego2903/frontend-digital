import './Card.css'

export const Card = ({producto}) => {

    const {id, nombre, imagen, precio} = producto

    return (
        <div key={id} className="contenedor-cards">
            <h2>{nombre}</h2>
            <img src={imagen} alt={imagen} className="imagen-card"/>
            <p>{precio}</p>
        </div>
    )
}
