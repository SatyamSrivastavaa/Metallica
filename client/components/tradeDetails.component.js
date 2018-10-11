import React ,{Component} from 'react';
import { Link } from 'react-router';

export default class TradeDetailsComponent extends Component{

    render(){
      return ( 
                <tr>
                  <td>{this.props.trade.date}</td>
                  <td>{this.props.trade.commodity}</td>
                  <td>{this.props.trade.side ? 'Buy' : 'Sell'}</td>
                  <td>{this.props.trade.quantity}</td>
                  <td>${this.props.trade.price}</td>
                  <td>{this.props.trade.counterParty}</td>
                  <td>{this.props.trade.location}</td>
                  <td><span className="glyphicon glyphicon-trash" onClick={this.props.DeleteTrade.bind(this,this.props.index,this.props.trade.tradeId)}></span></td>
                  <td><Link to="/home/view/{id}" ><button type="button" className="btn btn-info">Info</button></Link></td>
                </tr>

          )
    }
}
