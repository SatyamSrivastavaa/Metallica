import React, { Component } from "react";
import { Link } from 'react-router';
import axios from 'axios';

export default class ViewOrder extends Component {
    deleteTrade() {
        axios.delete('http://localhost:8081/api/trades/delete?id=' + this.props.params.id)
            .then(dispatch => {
                dispatch(this.props.FetchTradeDetails());
            }).catch(err => {
                console.log(err);
            });
            this.props.history.push('/home/');
    }

    render() {
        let tempId = this.props.params.id;
        var tempTrade = this.props.myTrades.find(
            (t) => {
                if (t.tradeId == tempId) {
                    return true;
                }
            }
        );
        return (

            <div>
                <div className="row" style={{ paddingLeft: "2%", borderBottom: "solid 1px black" }}>
                    <span className="col-sm-6" style={{ paddingTop: "0.8%" }}><b>Trade ID: {tempTrade.tradeId}</b></span>
                    <div className="col-sm-4 offset-sm-4">
                        <Link to={"/home/edit/" + tempTrade.tradeId}><div className="btn glyphicon glyphicon-pencil " style={{ marginRight: "1%" }}></div></Link>
                        <div className="btn glyphicon glyphicon-trash" onClick={this.deleteTrade.bind(this)}></div>
                    </div>
                </div>
                <div style={{ padding: "1%" }}>
                    <div className="form-group row">
                        <span for="tdate" className="col-sm-4 col-form-label" style={{ paddingTop: "0.1em" }}>Trade Date: </span>
                        <div className="col-sm-8">
                            <span id="tdate">{tempTrade.date}</span>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <span className="control-group col-sm-4" for="symbol" style={{ paddingTop: "0.1em" }}>Commodity: </span>
                        <div className="col-sm-8">

                            <span>{tempTrade.commodity}</span>
                        </div>
                    </div>
                    <br />

                    <fieldset className="form-group row">
                        <span className="form-check-label col-sm-4">Side: </span>
                        <span id="side" className="col-sm-8">{tempTrade.side ? 'Buy' : 'Sell'}</span>
                    </fieldset>

                    <div className="row">
                        <span className="control-group col-sm-4" for="party" style={{ paddingTop: "0.1em" }}>Counterparty: </span>
                        <div className="col-sm-8">
                            <span id="party">{tempTrade.counterParty}</span>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <span for="price" className="col-sm-4 col-form-label" style={{ paddingTop: "0.1em" }}>Price: </span>
                        <div className="col-sm-8">
                            <span id="price"><span>$</span>{tempTrade.price}</span>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <span for="qty" className="col-sm-4 col-form-label" style={{ paddingTop: "0.1em" }}>Quantity: </span>
                        <div className="col-sm-8">
                            <span id="qty">{tempTrade.quantity}</span>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <label className="col-sm-4" for="location" style={{ paddingTop: "0.1em" }}>Location: </label>
                        <div className="col-sm-8">
                            <span id="location">{tempTrade.location}</span>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}