import React from 'react';
import {Link} from 'react-router-dom'

import Company from '../Company';

function JobOpening (props) {
    return (
        <div>
        <h2>Currently Open Intern Positions</h2>
            <ul className="list-group">
                {
                    props.positions.map(position => (
                    <li key={position.id} className="list-group-item">
                        <Link to={`/company/position/${position.id}`}>{position.title}</Link>
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default JobOpening;