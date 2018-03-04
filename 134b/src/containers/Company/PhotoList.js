import React from 'react';

class PhotoList extends React.Component{
    render(){  
        return(
            // <h1>{props.photos}</h1>
            <li><img alt="image" src={require(`${this.props.img}`)} /></li>
        )
    }
}

export default PhotoList;