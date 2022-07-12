import React from 'react'; 
import "./index.css"




const BannerCardItem=(props)=>{
    const {eachBannerItem}=props
    const {headerText,description,className}=eachBannerItem
    return(
        <li className={`${className} each-banner-list`}> 
        <div>
           <h1 className='headerText'>{headerText}</h1> 
           <p>{description} </p>
           <button className='button'>Click Me</button>
        </div>  
        </li>
    )
}



export default BannerCardItem