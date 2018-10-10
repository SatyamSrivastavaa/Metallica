import React ,{Component} from 'react';
import {Link} from 'react-router';
import SearchComponent from './search.component';
import TradeList from './tradeList.component';
import ViewOrder from './viewOrder.component';
import CreateOrder from './createOrder.component';
import LiveData from './LiveData.component.js';

export default class MainComponent extends Component{

    componentDidMount(){
        this.props.FetchTradeDetails();
        this.props.FetchCommodities();
        this.props.FetchCounterparty();
        this.props.FetchLocations();
    }

    render(){ 
        return (
            <div>
                <div class="topnav">
                    <a href="#home" class="active">TRADES</a>
                    <a href="#news">TRANSFERS</a>
                    <a href="#contact">TRANSPORTS</a>
                    {/* <!-- HTML for displaying user details --> */}
                    <div class="topnav-right">
                    <div class="userContent"></div>
                    </div>
                </div>
                <div>
                    <LiveData />
                </div>

                <SearchComponent />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8"><TradeList {...this.props}/></div>
                        <div className="col-md-4">{React.cloneElement(this.props.children, this.props)}</div>
                    </div>
                </div>
            </div>
        )
    }
}