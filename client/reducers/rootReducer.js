import trades from './tradeReducer';
import commodities from './commodityReducer';
import counterparties from './counterpartyReducer';
import locations from './locationReducer';
import {combineReducers} from 'redux';

var rootReducer = combineReducers({
    trades: trades,
    commodities: commodities,
    counterparties: counterparties,
    locations: locations
});
export default rootReducer;