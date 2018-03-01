import React from 'react';

export class ImageLoad extends React.Component{
    render() {
        return(
            <div>
                     <img alt="none" src={this.props.imageURL} /> 
            </div>
        )
    }
}

export default ImageLoad


  