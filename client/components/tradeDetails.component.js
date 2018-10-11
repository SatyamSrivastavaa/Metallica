import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class TradeDetailsComponent extends Component {

  deleteTrade() {
    axios.delete('http://localhost:8081/api/trades/delete?id=' + this.props.trade.tradeId)
      .then(dispatch => {
        dispatch(this.props.FetchTradeDetails());
      }).catch(err => {
        console.log(err);
      });
      this.props.history.push('/home/');
  }

  render() {
    return (
      <tr>
        <td>{this.props.trade.date}</td>
        <td>{this.props.trade.commodity}</td>
        <td>{this.props.trade.side ? 'Buy' : 'Sell'}</td>
        <td>{this.props.trade.quantity}</td>
        <td>${this.props.trade.price}</td>
        <td>{this.props.trade.counterParty}</td>
        <td>{this.props.trade.location}</td>
        <td><span className="glyphicon glyphicon-trash" onClick={this.deleteTrade.bind(this)}></span></td>
        <td><Link to={"/home/view/" + this.props.trade.tradeId} ><button type="button" className="btn btn-info">Info</button></Link></td>
      </tr>

    )
  }
}
