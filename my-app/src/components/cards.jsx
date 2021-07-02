import React, { useState, useEffect } from 'react';


const Card = (props) => {
    return ( 
        <div className="Card" onClick={()=>props.change(props.data)}>

            <label>{props.name}</label>
            <p>{props.description}</p>
            <span>{props.date}</span>
        </div>
     );
}
 
export default Card;