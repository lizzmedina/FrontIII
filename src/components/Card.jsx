

export const Card = ({producto}) => {
    
    const {id, nombre, imagen, precio} = producto
    
    return (
        <div key={id} className= "card">
                
            <h2>{nombre}</h2>
            <img src={imagen} alt={imagen} className = "card-Img"/>
            <h3>{precio}</h3>  
        </div>
    )
}
export default Card;

