import React, {Component} from 'react';
import '../styles/notification.css';


export default class Toast extends Component {
    
    constructor (props) {
      super(props)
      this.state = {
        visible: false
      }
    }
    
    render () {
      let classes = `toast ${this.props.level} `
      classes += this.state.visible ? 'visible' : ''
      return (
        <div className={classes}>
          <p>{ this.props.message }</p>
        </div>
      )
    }
    
    componentWillReceiveProps (nextProps) {
      if (this.props.visible !== nextProps.visible) {
        this.setState({
          visible: nextProps.visible
        })
      }
    }
  }
  
  Toast.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired
  }