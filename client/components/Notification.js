import React, { Component } from 'react';
import Toast from './Toast'
import '../styles/notification.css'

export default class Notification extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      showToast: false,
      level: 'success',
      message: 'New Trade Created',
      data: true,
      trade: {

      }
    }
    this.initializeWebSocketConnection();
    this.showToast = this.showToast.bind(this);
  }


  initializeWebSocketConnection() {
    let self= this;
    let socket = new SockJS('http://localhost:8082/notification');
    let stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      stompClient.subscribe('/metallica', function (e) {
        self.setState({
          data: !self.state.data,
        })
        //alert('New Trade Created')
        self.showToast();
      })
    });
  }



  render() {
    //var msg = this.state.message + this.state.trade.tradeId + this.state.trade.price;
    return (
        <Toast
          level={this.state.level}
          message = {this.state.message}
          visible={this.state.showToast}
        />
    )
  }


  showToast() {
    this.setState({
      showToast: true
    }, () => {
      setTimeout(() =>
        this.setState({ showToast: false })
        , 2000)
    })
  }
}
