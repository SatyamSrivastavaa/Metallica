import React, { Component } from 'react';
import DropDown from './dropdown.component';
import axios from 'axios';

class SearchComponent extends Component {
    constructor() {
        super();

    }

    searchTrade() {
        var buyOrSell = () => {
            if ((document.getElementById("buy").checked == true) && (document.getElementById("sell").checked == true)) {
                return null;
            }
            else if ((document.getElementById("buy").checked == true) && (document.getElementById("sell").checked == false)) {
                return true;
            }
            else if ((document.getElementById("buy").checked == false) && (document.getElementById("sell").checked == true)) {
                return false;
            }
            else {
                return null;
            }
        }

        let startDate = this.refs.startDate.value;
        let endDate = this.refs.endDate.value;
        let commodity = this.refs.commSelected.value;
        let counterParty = this.refs.cpSelected.value;
        let location = this.refs.locSelected.value;

        const body = {
            startDate: (startDate === "") ? null : startDate,
            endDate: (endDate === "") ? null : endDate,
            commodity: (commodity === "") ? null : commodity,
            counterParty: (counterParty === "") ? null : counterParty,
            location: (location === "") ? null : location,
            side: buyOrSell()
        }

        console.log(body)

        axios.post('http://localhost:8081/api/trades/search', body, {
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            this.props.FetchTradeDetails(response);
        });
        this.props.history.push('/home/')

    }

    cancelSearchTrade() {
        this.props.FetchTradeDetails();
    }

    render() {
        var comms = this.props.myCommodities.map(
            (c, i) => {
                return <DropDown key={i} name={c.name} {...this.props} />
            }
        )
        var cpList = this.props.myCounterParties.map(
            (cp, i) => {
                return <DropDown key={i} name={cp.name} {...this.props} />
            }
        )
        var locList = this.props.myLocations.map(
            (l, i) => {
                return <DropDown key={i} name={l.cityname} {...this.props} />
            }
        )
        return (
            <div className="container" >
                <form ref={el => (this.form = el)} >

                    <div className='row'>
                        <div className="col-sm-4">
                            <label id="td" htmlFor="tradeDate">Trade Date</label> <br />
                            <input type="date" ref="startDate" name="startDate" /> to <input ref="endDate" type="date" name="endDate" />

                        </div>


                        <div className="col-sm-2">
                            <label id="com" htmlFor="commodity">Commodity</label><br />
                            <select id="commSel" ref="commSelected">
                                <option value={null}></option>
                                {comms}
                            </select>
                        </div>

                        <div className="col-sm-2">
                            <label id="side" >Side</label><br />
                            <input id="buy" ref="buy" htmlFor="side" type="checkbox" value="buy" />Buy
                            <input id="sell" ref="sell" htmlFor="side" type="checkbox" value="sell" />Sell
                    </div>

                        <div className="col-sm-2">
                            <label id="counter" htmlFor="counterparty">Counterparty</label><br />
                            <select ref="cpSelected">
                                <option value={null}></option>
                                {cpList}
                            </select>
                        </div>

                        <div className="col-sm-2">
                            <label id="loc" htmlFor="location">Location</label><br />
                            <select ref="locSelected">
                                <option value={null}></option>
                                {locList}
                            </select>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <button type="reset" className="btn btn-info clearBtn" onClick={this.cancelSearchTrade.bind(this)}>Clear</button>
                            <button type="button" onClick={this.searchTrade.bind(this)} className="btn btn-info searchBtn">Search</button>
                        </div>
                    </div>

                </form>
            </div>

        );
    }
}

export default SearchComponent;