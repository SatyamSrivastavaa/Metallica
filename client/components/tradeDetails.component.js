import React ,{Component} from 'react';

export default class TradeDetailsComponent extends Component{

    render(){
      return ( 
                <tr>
                  <td>{this.props.trade.date}</td>
                  <td>{this.props.trade.commodity.symbol}</td>
                  <td>{this.props.trade.side ? 'Buy' : 'Sell'}</td>
                  <td>{this.props.trade.quantity}</td>
                  <td>${this.props.trade.price}</td>
                  <td>{this.props.trade.counterParty.name}</td>
                  <td>{this.props.trade.location.cityname}</td>
                  <td><span className="glyphicon glyphicon-trash" onClick={this.props.DeleteTrade.bind(this,this.props.index,this.props.trade.id)}></span></td>
                </tr>
          )
    }
}
