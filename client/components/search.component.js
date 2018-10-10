import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { searchTrade, FetchTradeDetails } from '../actions/actions'

class SearchComponent extends Component{
    searchTrade(){
        var buyOrSell = () => {
            if((document.getElementById("buy").checked == true)  && (document.getElementById("sell").checked == true)){
                return null;
            }
            else if((document.getElementById("buy").checked == true)  && (document.getElementById("sell").checked == false)){
                return true;
            }
            else if((document.getElementById("buy").checked == false)  && (document.getElementById("sell").checked == true)){
                return false;
            }
            else{
                return null;
            }
        } 

        const body = {
            startDate: this.refs.startDate.value,
            endDate: this.refs.endDate.value,
            commodity: this.refs.commodity.value,
            counterParty: this.refs.counterParty.value,
            location: this.refs.location.value,
            side: buyOrSell()
        }

        console.log(body);
        
        this.props.searchTrade(this.state);
    }

    cancelSearchTrade(){
        this.props.FetchTradeDetails();
    }

    render(){

        return ( 
        <div className = "container" >
            <form ref = {el => (this.form = el)} >
                
                <div className = 'row'>
                    <div className = "col-sm-4">
                        <label id = "td" htmlFor="tradeDate">Trade Date</label> <br/>
                        <input type = "date" ref="startDate" name="startDate"/> to <input ref="endDate" type = "date" name ="endDate"/>  
                    
                    </div>

                
                   <div className = "col-sm-2">
                        <label id = "com" htmlFor = "commodity">Commodity</label><br/>
                        <input ref="commodity" type = "select" name = "commodity"/> 
                    </div>
                    
                     <div className = "col-sm-2">
                         <label id = "side" >Side</label><br/>
                         <input id="buy" ref="buy" htmlFor="side" type = "checkbox" value = "buy"/>Buy
                         <input id="sell" ref="sell" htmlFor="side" type = "checkbox" value = "sell"/>Sell
                    </div>
                    
                    <div className = "col-sm-2">
                        <label id = "counter" htmlFor = "counterparty">Counterparty</label><br/>
                        <input ref="counterParty" type = "select" name = "counterParty" />
                    </div>
                   
                    <div className = "col-sm-2">
                        <label id = "loc" htmlFor = "location">Location</label><br/>
                         <input ref="location" type = "select" name = "location" />
                    </div>
                    
               </div> 

                <div className = "row">
                <div className = "col-sm-12">
                    <button className = "clearBtn" onClick = {this.cancelSearchTrade.bind(this)}>Clear</button>
                    <button type="button" onClick = {this.searchTrade.bind(this)} className = "searchBtn">Search</button> 
                </div>
                </div> 

                </form>   
        </div>
        
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchTrade: (trade) => dispatch(searchTrade(trade))
    }
}

export default connect(null, mapDispatchToProps)(SearchComponent);