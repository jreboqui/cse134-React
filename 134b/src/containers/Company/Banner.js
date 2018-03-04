import React from 'react';

class Banner extends React.Component{
    render(){  
        return(
            <div className="jumbotron jumbotron-fluid"
            // require(`${this.props.img}`)
            style={{backgroundImage: "url("+require(`${this.props.banner}`)+")"}}>
            </div>
        )
    }
}

export default Banner;