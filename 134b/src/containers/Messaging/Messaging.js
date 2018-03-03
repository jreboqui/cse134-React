import React, {Component} from 'react';
import Inbox from './Inbox'

class Messaging extends Component {

    render() {
        return (
            <div id="container" class="container">
                <h2>Conversations</h2>
                <hr></hr>
                <Inbox/>
            </div>
        )
    }
}

export default Messaging;