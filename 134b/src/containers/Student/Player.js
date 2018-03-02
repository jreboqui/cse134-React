import React from 'react';
import StudentAPI from './StudentAPI';
import CompanyListings from './CompanyListings';
import ApplicationTable from './ApplicationTable';

import {kpan, pp1} from './Images';
//import { Company } from '../../Shared/Objects';
import './resume.css';
import './resume.min.css';

export class Player extends React.Component {
    render(){
        const player = StudentAPI.get(
            parseInt(this.props.match.params.number, 10)
        )
        if (!player){
            return <div> Sorry, player not found </div>
        }
        
        return (
            <div>
                <div id="sidebar"> 
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
                        <img alt="none" 
                        src={require(`${player.pic}`)}
                        height="200px"
                        width="200px"/>
                        <h1> {player.name}</h1>
                        <h3> School: {player.school} </h3>
                        <h3> GPA: {player.GPA} </h3>
                        <h3> Year: {player.year} </h3>
                        <button className="btn btn-primary"> Edit Profile </button>
                        <br/>
                        <button className="btn btn-warning"> Messaging </button>
                        <br/>
                        <button className="btn btn-danger"> Logout </button>
                    </nav>
                </div>
                <ApplicationTable />
                <CompanyListings />
            </div>
        )

    }
}