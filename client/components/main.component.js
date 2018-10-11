import React ,{Component} from 'react';
import SearchComponent from './search.component';
import TradeList from './tradeList.component';
import LiveData from './LiveData.component.js';
import Notification from './Notification';

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
            <Notification/>
                <div className="topnav">
                    <a href="#home" className="active">TRADES</a>
                    <a href="#news">TRANSFERS</a>
                    <a href="#contact">TRANSPORTS</a>
                    {/* <!-- HTML for displaying user details --> */}
                    <div className="topnav-right">
                    <div className="userContent"></div>
                    </div>
                </div>
                <div className="liveData">
                    <LiveData />
                </div>
                <br/>
                <SearchComponent {...this.props} />
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 border"><TradeList {...this.props}/></div>
                        <div className="col-md-4 border">{React.cloneElement(this.props.children, this.props)}</div>
                    </div>
                </div>
            </div>
        )
    }
}