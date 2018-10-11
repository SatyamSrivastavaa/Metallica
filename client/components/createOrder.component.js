import React, { Component } from "react";
import DropDown from './dropdown.component';
import axios from 'axios';

export default class CreateOrder extends Component {
    constructor() {
        super();
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    setBuySell() {
        let buy = document.getElementById('buy_side').checked;
        var a;
        if (buy) {
            a = true;
        } else {
            a = false;
        }
        return a;
    }

    addTrade() {
        let body = {
            "side": this.setBuySell(),
            "status": false,
            "quantity": this.refs.quantity.value,
            "price": this.refs.price.value,
            "commodity": this.refs.commSel.value,
            "counterParty": this.refs.cpSel.value,
            "location": this.refs.locSel.value,
            "date": this.formatDate(Date())
        }
        //console.log(body);
        if (body.quantity <= 0 || body.price <= 0 || body.quantity.length == 0 || body.price.length == 0) {
            alert("Please fill form with correct data")
        } else {
            axios.post('http://localhost:8081/api/trades/add', body, {
                headers: { 'Content-Type': 'application/json' }
            }).then(dispatch => {
                dispatch(this.props.FetchTradeDetails());
            })
        }
    }

    render() {
        var comms = this.props.myCommodities.map(
            (c, i) => {
                return <DropDown key={i} name={c.name} selectData={this.selectComm} {...this.props} />
            }
        )
        var cpList = this.props.myCounterParties.map(
            (cp, i) => {
                return <DropDown key={i} name={cp.name} selectData={this.selectCP} {...this.props} />
            }
        )
        var locList = this.props.myLocations.map(
            (l, i) => {
                return <DropDown key={i} name={l.cityname} selectData={this.selectLoc} {...this.props} />
            }
        )
        return (
            <div>
                <div className="row" style={{ borderBottom: "solid 1px black" }}>
                    <span className="col-sm-12" style={{ paddingTop: "0.8%" }}><b>Create Trade</b></span>
                </div>
                <form style={{ paddingLeft: "1%", marginTop: "4%" }}>
                    <div className="form-group row">
                        <label for="tdate" className="col-sm-4 col-form-label" style={{ paddingTop: "8px" }}>Trade Date</label>
                        <div className="col-sm-6">
                            <input type="text" ref="date" value={this.formatDate(Date())} className="form-control" id="tdate" required />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="control-group col-sm-4" for="symbol" style={{ paddingTop: "8px" }}>Commodity: </label>
                        <div className="col-sm-8">
                            <select ref="commSel" className="dropdown" required>
                                {comms}
                            </select>
                        </div>
                    </div>
                    <br />

                    <fieldset className="form-group row">
                        <label className="form-check-label col-sm-2">Side: </label>
                        <div className="form-check form-check-inline col-sm-1">
                            <input className="form-check-input" ref="buy" type="radio" name="side" checked id="buy_side" value="1" required />
                            <label className="form-check-label" for="buy_side">Buy</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-1">
                            <input className="form-check-input" ref="sell" type="radio" name="side" id="sell_side" value="0" required />
                            <label className="form-check-label" for="sell_side">Sell</label>
                        </div>
                    </fieldset>

                    <div className="row">
                        <label className="control-group col-sm-4" for="party" style={{ paddingTop: "8px" }}>Counterparty: </label>
                        <div className="col-sm-8">
                            <select ref="cpSel" required>
                                {cpList}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label for="price" className="col-sm-4 col-form-label" style={{ paddingTop: "8px" }}>Price: </label>
                        <div className="col-sm-6">
                            <input ref="price" type="number" step="any" min="0" className="form-control" id="price" required />
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label for="qty" className="col-sm-4 col-form-label" style={{ paddingTop: "8px" }}>Quantity: </label>
                        <div className="col-sm-6">
                            <input ref="quantity" type="number" min="0" className="form-control" id="qty" required />
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <label className="control-group col-sm-4" for="location" style={{ paddingTop: "8px" }}>Location: </label>
                        <div className="col-sm-8">
                            <select ref="locSel" required>
                                {locList}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row col-sm-12">

                        <button type="reset" className="btn btn-default" style={{ margin: "5%" }}>Cancel</button>
                        <button type="button" onClick={this.addTrade.bind(this)} className="btn btn-default">Save</button>
                    </div>
                </form>
            </div>
        )

    }
}