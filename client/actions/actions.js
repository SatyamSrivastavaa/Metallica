import axios from 'axios';

export function FetchTradeDetails() {
    // var request= axios.get('https://api.myjson.com/bins/xujuk');
    var request = axios.get('http://localhost:8081/api/trades/find/all');

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_TRADE_DETAILS',
                    response: response.data
                })
            }
        );
    }
}

export function FetchCommodities() {
    // var request= axios.get('https://api.myjson.com/bins/xujuk');
    var request = axios.get('http://localhost:8081/api/refdata/commodity');

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_COMMODITIES',
                    response: response.data
                })
            }
        );
    }
}

export function FetchLocations() {
    // var request= axios.get('https://api.myjson.com/bins/xujuk');
    var request = axios.get('http://localhost:8081/api/refdata/location');

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_LOCATIONS',
                    response: response.data
                })
            }
        );
    }
}

export function FetchMarketdata() {
    // var request= axios.get('https://api.myjson.com/bins/xujuk');
    var request = axios.get('http://localhost:8081:api/marketdata/fetchCommodities');

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_MARKETDATA',
                    response: response.data
                })
            }
        );
    }
}

export function FetchCounterparty() {
    // var request= axios.get('https://api.myjson.com/bins/xujuk');
    var request = axios.get('http://localhost:8081/api/refdata/counterparty');

    return (dispatch) => {
        request.then(
            (response) => {
                dispatch({
                    type: 'FETCH_COUNTERPARTY',
                    response: response.data
                })
            }
        );
    }
}

export function DeleteTrade(index, id) {
    fetch('http://localhost:8081:api/trades/delete?id=' + id, {
        method: 'delete'
    })
        .then(res => {
            console.log(res.status);
        });

    return {
        type: 'DELETE_TRADE',
        index: index
    }
}

export const searchTrade = (searchCriteria) => {

    return (dispatch, getState) => {
        fetch('http://localhost:8081/api/trade/search', {
            method: POST,
            body: searchCriteria
        })
            .then(res => dispatch({
                type: 'FETCH_TRADE_DETAILS',
                response: res.data
            }))
            .console.log(this.state);
    }
};