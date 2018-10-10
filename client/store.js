import {createStore, applyMiddleware} from 'redux';
import rootreducer from './reducers/rootReducer';
import trades from './data/trades';
import thunk from 'redux-thunk';

var defStoreData = {trades: []}

var store = createStore(rootreducer, defStoreData, applyMiddleware(thunk));

export default store;
