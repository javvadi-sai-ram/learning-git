




const CardItem =(props)=>{
    const {eachCard}=props;
    const {title,description,imgUrl,className}=eachCard
    return(
        <li>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </li>
    )
}



export default CardItem;