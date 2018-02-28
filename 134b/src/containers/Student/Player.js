import React from 'react';
import StudentAPI from './StudentAPI';
import CompanyListings from './CompanyListings';

import logo from './kpan.jpg';
import logo2 from './pp1.jpeg';

export class Player extends React.Component {
    render(){
        const player = StudentAPI.get(
            parseInt(this.props.match.params.number, 10)
        )
        if (!player){
            return <div> Sorry, player not found </div>
        }
        
        let profilePic;
        if (player.number === 1){
             profilePic = logo;
        } else {
             profilePic = logo2;
        }
        return (
            <div>
                <img alt="none" 
                     src={profilePic}
                     height="200"
                     width="200"/>
                <h1> {player.name}</h1>
                <h3> School: {player.school} </h3>
                <h3> GPA: {player.GPA} </h3>
                <h3> Year: {player.year} </h3>
                <button> Edit Profile </button>
                <button> Messaging </button>
                <button> Logout </button>
                <CompanyListings />
            </div>
        )

    }
}