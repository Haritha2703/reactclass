function Card({icon,title,description}){
    return(
        <div>
            <i className={icon}></i>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
export default Card;