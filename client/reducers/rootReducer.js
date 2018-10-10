import trades from './tradeReducer';
import {combineReducers} from 'redux';

var rootReducer = combineReducers({
    trades: trades
});
export default rootReducer;
