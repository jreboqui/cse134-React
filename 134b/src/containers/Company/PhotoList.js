import React from 'react';

function PhotoList (props) {
        
        return(
            // <h1>{props.photos}</h1>
            <li><img alt="image" src={props.img} /></li>
        )
    
}

export default PhotoList;