import React, {Component} from 'react';

class Messaging extends Component {

    State = {
        userType: localStorage.getItem('userType'),
        userId: localStorage.getItem('userId')
    }

    render() {
        return (
            <div id="container" class="container">
                <h2>Conversations</h2>
                
            </div>
        )
    }
}