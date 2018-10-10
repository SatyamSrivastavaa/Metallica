import React, {Component} from 'react';

class DropDown extends Component {
    selectData() {
        this.props.selectData(this.props.name);
    }

    render() {
        return (
            <a onClick={this.selectData.bind(this)} className="dropdown-item" href="#">{this.props.name}</a>
        )
    }
}

export default DropDown;