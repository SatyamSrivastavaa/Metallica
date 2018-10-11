import React, { Component } from "react";
import DropDown from './dropdown.component';
import axios from 'axios';

export default class CreateOrder extends Component {
    constructor() {
        super();

        this.selectComm = this.selectComm.bind(this);
        this.selectCP = this.selectCP.bind(this);
        this.selectLoc = this.selectLoc.bind(this);
        this.state = {
            comm: '',
            cp: '',
            loc: ''
        }
    }

    selectComm(name) {
        this.setState({ comm: name })
    }

    selectCP(name) {
        this.setState({ cp: name })
    }

    selectLoc(name) {
        this.this.setState({ loc: name });
    }

    addTrade() {
        let body = {
            "side": "False",
            "status": "False",
            "quantity": "3000",
            "price": "3332.21",
            "commodity": "Test comm3",
            "counterParty": "Tony Stark",
            "location": "Kanpur",
            "date": "2019-10-09"
        }
        axios.post('http://localhost:8081/api/trades/add', body, {
            headers: { 'Content-Type': 'application/json' }
        }).then(dispatch => {
            dispatch(this.props.FetchTradeDetails());
        })
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
                <div className="row" style={{borderBottom: "solid 1px black" }}>
                    <span className="col-sm-2" style={{ paddingTop: "0.8%" }}><b>Trade ID: 12099</b></span>
                    <div className="col-sm-8"></div>
                    <div className="col-sm-2">
                        <div className="btn glyphicon glyphicon-pencil " style={{ marginRight: "1%" }}></div>
                    </div>
                </div>
                <form style={{ paddingLeft: "1%", marginTop: "4%" }}>
                    <div className="form-group row">
                        <label for="tdate" className="col-sm-2 col-form-label" style={{ paddingTop: "8px" }}>Trade Date</label>
                        <div className="col-sm-2">
                            <input type="text" ref="date" value={date()} className="form-control" id="tdate" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <label className="control-group col-sm-2" for="symbol" style={{ paddingTop: "8px" }}>Commodity: </label>
                        <div className="col-sm-2">
                        <select>
                            {comms}
                        </select>
                    </div>
                    </div>
                    <br />

                    <fieldset className="form-group row">
                        <label className="form-check-label col-sm-2">Side: </label>
                        <div className="form-check form-check-inline col-sm-1">
                            <input className="form-check-input" type="radio" name="side" id="buy_side" value="1" />
                            <label className="form-check-label" for="buy_side">Buy</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-1">
                            <input class="form-check-input" type="radio" name="side" id="sell_side" value="0" />
                            <label class="form-check-label" for="sell_side">Sell</label>
                        </div>
                    </fieldset>

                    <div className="row">
                        <label className="control-group col-sm-2" for="party" style={{ paddingTop: "8px" }}>Counterparty: </label>
                        <div className="col-sm-2">
                        <select>
                            {cpList}
                        </select>
                    </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label for="price" className="col-sm-2 col-form-label" style={{ paddingTop: "8px" }}>Price: </label>
                        <div className="col-sm-2 input-group">
                            <span className="input-group-addon">$</span>
                            <input type="text" className="form-control" id="price" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <label for="qty" className="col-sm-2 col-form-label" style={{ paddingTop: "8px" }}>Quantity: </label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="qty" />
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <label className="control-group col-sm-2" for="location" style={{ paddingTop: "8px" }}>Location: </label>
                        <div className="col-sm-2">
                            <select>
                                {locList}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row col-sm-12">
                        <div className="col-xs-1"></div>
                        <div className="col-xs-5">
                            <button type="reset" className="btn btn-default" style={{ margin: "5%" }}>Cancel</button>
                            <button type="button" onClick={this.addTrade.bind(this)} className="btn btn-default">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        )

    }
}