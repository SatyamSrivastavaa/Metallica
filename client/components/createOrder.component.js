import React, { Component } from "react";

export default class CreateOrder extends Component{

render(){
    return (
        <div>           
                <div className="row" style={{paddingLeft:"2%", borderBottom:"solid 1px black"}}>
                    <span className="col-sm-2" style={{paddingTop:"0.8%"}}><b>Trade ID: 12099</b></span>
                    <div className="col-sm-8"></div>
                    <div className="col-sm-2">
                    <div className="btn glyphicon glyphicon-pencil " style={{marginRight:"1%"}}></div>
                    </div>
                </div>
                <form style={{paddingLeft:"1%", marginTop:"4%"}}>
                    <div className="form-group row">
                        <label for="tdate" className="col-sm-2 col-form-label" style={{paddingTop:"8px"}}>Trade Date</label>
                        <div className="col-sm-2">
                            <input type="date" className="form-control" id="tdate"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="control-group col-sm-2" for="symbol" style={{paddingTop:"8px"}}>Commodity: </label>
                        <div className="col-sm-2">
                        <select id="symbol" className="btn">
                            <option class="hidden" value="">Metal</option>
                            <option value="1">Aluminium</option>
                            <option value="2">Aluminium2asdhajks</option>
                            <option value="3">asjkdhajrhqwerioqwjesdk</option>
                        </select>
                        </div>
                    </div>
                    <br/>
                
                    <fieldset className="form-group row">
                        <label className="form-check-label col-sm-2">Side: </label>
                        <div className="form-check form-check-inline col-sm-1">
                            <input className="form-check-input" type="radio" name="side" id="buy_side" value="1"/>
                            <label className="form-check-label" for="buy_side">Buy</label>
                        </div>
                        <div className="form-check form-check-inline col-sm-1">
                <input class="form-check-input" type="radio" name="side" id="sell_side" value="0"/>
                <label class="form-check-label" for="sell_side">Sell</label>
                </div>
                    </fieldset>
                
                    <div className="row">
                        <label className="control-group col-sm-2" for="party" style={{paddingTop:"8px"}}>Counterparty: </label>
                        <div className="col-sm-2">
                        <select id="party" className="btn">
                            <option className="hidden" eventKey="">Metal</option>
                            <option className="item" eventKey="1">Aluminium</option>
                            <option className="item" eventKey="2">Aluminium2asdhajks</option>
                            <option className="item" eventKey="3">asjkdhajrhqwerioqwjesdk</option>
                        </select>
                        
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <label for="price" className="col-sm-2 col-form-label" style={{paddingTop:"8px"}}>Price: </label>
                        <div className="col-sm-2 input-group">
                            <span className="input-group-addon">$</span>
                            <input type="text" className="form-control" id="price"/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <label for="qty" className="col-sm-2 col-form-label" style={{paddingTop:"8px"}}>Quantity: </label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" id="qty"/>
                        </div>
                    </div>
                    <br/>

                    <div className="row">
                        <label className="control-group col-sm-2" for="location" style={{paddingTop:"8px"}}>Location: </label>
                        <div className="col-sm-2">
                        <select id="location" className="btn">
                            <option className="hidden">Metal</option>
                            <option className="item">Aluminium</option>
                            <option className="item">Aluminium2asdhajks</option>
                            <option className="item">asjkdhajrhqwerioqwjesdk</option>
                        </select>
                        </div>
                    </div>
                    <br/>
                <div className="form-group row col-sm-12">
                <div className="col-xs-1"></div>
                <div className="col-xs-5">
                    <button type="reset" className="btn btn-default" style={{margin:"5%"}}>Cancel</button>
                    <button type="submit" className="btn btn-default">Save</button>
                    </div>
                </div>
                </form>
            </div> 
        )

    }
}