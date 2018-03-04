import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Inbox from './Inbox';
import NewMessage from './NewMessage';

class Messaging extends Component {

    onClickBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div id="container" className="container">
                <h2 style={{display:"inline-block"}}>Conversations</h2>
                <button onClick={this.onClickBack} className="btn btn-danger" style={{float:"right", width:"6em", display:"inline-block"}}>Go Back</button>
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