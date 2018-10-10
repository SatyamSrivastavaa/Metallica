import React, { Component } from "react";
import { Link } from 'react-router';

export default class ViewOrder extends Component{
    render(){
        return (
            <div>           
                <div className="row" style={{paddingLeft:"2%", borderBottom:"solid 1px black"}}>
                    <span className="col-sm-2" style={{paddingTop:"0.8%"}}><b>Trade ID: 12099</b></span>
                    <div className="col-sm-8"></div>
                    <div className="col-sm-2">
                    <Link to="/create"><div className="btn glyphicon glyphicon-pencil " style={{marginRight:"1%"}}></div></Link>
                    <div className="btn glyphicon glyphicon-trash" onClick={this.props.DeleteTrade.bind(this,this.props.index,this.props.trade.id)}></div>   
                    </div>
                </div>
                <div style={{padding:"1%"}}>
                    <div className="form-group row">
                        <span for="tdate" className="col-sm-2 col-form-label" style={{paddingTop:"0.1em"}}>Trade Date: </span>
                        <div className="col-sm-2">
                        <span id="tdate">DD/MM/YYYY</span>
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                        <span className="control-group col-sm-2" for="symbol" style={{paddingTop:"0.1em"}}>Commodity: </span>
                        <div className="col-sm-2">
                            
                            <span>Arsenic</span>
                        </div>
                    </div>
                    <br/>

                    <fieldset className="form-group row">
                        <span className="form-check-label col-sm-2">Side: </span>
                        <span id="side" className="col-sm-2">Buy</span>
                    </fieldset>

                    <div className="row">
                        <span className="control-group col-sm-2" for="party" style={{paddingTop:"0.1em"}}>Counterparty: </span>
                        <div className="col-sm-2">
                            <span id="party">Satyam</span>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <span for="price" className="col-sm-2 col-form-label" style={{paddingTop:"0.1em"}}>Price: </span>
                        <div className="col-sm-2">
                            <span id="price"><span>$</span>10002</span>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <span for="qty" className="col-sm-2 col-form-label" style={{paddingTop:"0.1em"}}>Quantity: </span>
                        <div className="col-sm-2">
                            <span id="qty">120</span>
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <label className="col-sm-2" for="location" style={{paddingTop:"0.1em"}}>Location: </label>
                        <div className="col-sm-2">
                        <span id="location">Amsterdam</span>
                        </div>
                    </div>
                    <br/>
                </div>
            </div> 
        )
    }
}
