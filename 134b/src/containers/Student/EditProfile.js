import React, from 'react';
import StudentAPI from '../Student/StudentAPI';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}