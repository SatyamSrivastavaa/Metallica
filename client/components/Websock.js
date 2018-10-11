import React, { Component } from 'react';
import * as SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './App.css';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {  
    let socket = new SockJS('http://localhost:8082/notification');
		let stompClient = Stomp.over(socket);
		stompClient.connect({}, function(frame) {
      stompClient.subscribe('/metallica',function(e){
        alert('New Trade Created')
      })
		});
  }
  
}

export default App;
