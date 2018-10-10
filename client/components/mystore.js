{
    <table className="">
    <thead>
      <tr>
      <th>Trade Date</th>
      <th>Commodity</th>
      <th>Side</th>
      <th>Qty(MT)</th>
      <th>Price(MT)</th>
      <th>Counter Party</th>
      <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {this.props.myTrades.map(
          (tradeDetails, i)=>{
              return (
                      <TradeDetails trade={tradeDetails} key={tradeDetails.id} index={i} {...this.props} />
              )
          }
      )}
    </tbody>
  </table>
}


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