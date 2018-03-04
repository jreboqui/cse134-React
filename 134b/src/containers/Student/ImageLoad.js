import React from 'react';
import {Link, Router} from 'react-router-dom';
import './Student.css';
export class ImageLoad extends React.Component{
    
        

    render() {
        
        if (this.props.compNumber){
            const compNumber = this.props.compNumber;
        
        return(
            <div id="photo">
                     {console.log(this.props.imageURL)}
                     {console.log(this.props.compNumber)}
                     <Router>   
                     <Link to={`/company/${compNumber}`}>
                     <button style={{"backgroundColor": "white", "width":"20%"}}><img alt="none" src={require(`${this.props.imageURL}`)} /></button>
                     </Link>
                     </Router>

            </div>
        )
    } else {
        return(
            <div id="photo">
                     {console.log(this.props.imageURL)}
                     {console.log(this.props.compNumber)}
                     <Router>   
                     <Link to={`/company/1`}>
                     <button style={{"backgroundColor": "white", "width":"20%"}}><img alt="none" src={require(`${this.props.imageURL}`)} /></button>
                     </Link>
                     </Router>
            </div>
        )
    }
    }
}

export default ImageLoad


  