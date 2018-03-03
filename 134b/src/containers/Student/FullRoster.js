import React from 'react';
import {Link} from 'react-router-dom';
import StudentAPI from './StudentAPI';

export class FullRoster extends React.Component{
    render(){
        return (
            <div>
                <ul>
                {    StudentAPI.all().map(p => (
                        <li key={p.number}>
                           <Link to={`/student/${p.number}`}>{p.name}</Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default FullRoster