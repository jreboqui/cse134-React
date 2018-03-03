import React, {Component} from 'react';
import Inbox from './Inbox';
import NewMessage from './NewMessage';

class Messaging extends Component {

    render() {
        return (
            <div id="container" className="container">
                <h2>Conversations</h2>
                <hr></hr>
                <Inbox/>
                <br></br>
                <br></br>
                <hr></hr>
                <NewMessage/>
            </div>
        )
    }
}

export default Messaging;