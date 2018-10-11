import React, { Component } from 'react';
import axios from 'axios';
import '../styles/livedata.css'

class LiveFeed extends Component {
    constructor(){
        super();
        this.fetchMD = this.fetchMD.bind(this);
    }
    componentWillMount(){
        this.setState({marketData:[]});
    }

    componentDidMount(){
        this.fetchMD();
        setInterval(this.fetchMD, 30000);
    }

    fetchMD(){
        let self = this;
        axios.get('http://localhost:8081/api/marketdata/fetchCommodities')
        .then((response) => {
            //console.log(response.data)
            self.setState({marketData:response.data})
        });
    }

    render(){
        if (this.state.marketData.length > 1) {
            return(
                <div className="ticker-wrap">
                    <div className="ticker">
                    {this.state.marketData.map((item, index) => (
                        <div className="ticker__item"  key={index}>
                            <p>{item.name}</p>
                            <p>{item.symbol}</p>
                            <p>${item.price}</p>
                        </div>
                    
                ))}
                </div>
                </div>
            );
        }

        else {
            return (
                <div>
                    <div>
                        <p>Loading...</p>
                    </div>
                </div>
            );
        }
    }
}

export default LiveFeed;