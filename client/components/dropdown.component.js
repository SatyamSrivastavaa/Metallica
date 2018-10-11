import React, {Component} from 'react';

class DropDown extends Component {

    render() {
        return (
            <option value={this.props.name} className="dropdown-item" href="#">{this.props.name}</option>
        )
    }
}

export default DropDown;