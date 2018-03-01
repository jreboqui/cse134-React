import React from 'react';
import {Link} from 'react-router-dom';
import './Student.css';
export class ImageLoad extends React.Component{
    
    render() {
       
        return(
            <div id="photo">
                     {console.log(this.props.imageURL)}
                     {console.log(this.props.compNumber)}

                     <Link to={`/company/${this.props.compNumber}`}>
                     <button id="close-image"><img alt="none" src={require(`${this.props.imageURL}`)} /></button>
                     </Link>

            </div>
        )
    }
}

export default ImageLoad


  