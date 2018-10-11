import axios from 'axios';

export function FetchTradeDetails(response) {
    // var request= axios.get('https://api.myjson.com/bins/xujuk');
    if (typeof response === 'undefined') {
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


    return (dispatch) => {
        dispatch({
            type: 'FETCH_TRADE_DETAILS',
            response: response.data
        });
    };
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
    fetch('http://localhost:8081/api/trades/delete?id=' + id, {
        method: 'delete'
    }).then(dispatch => {
        dispatch(this.props.FetchTradeDetails());
    })

    return {
        type: 'FETCH_TRADE_DETAILS',
        index: index
    }
};