import {connect} from 'react-redux';
import * as AllActions from '../actions/actions';
import MainComponent from './main.component';
import {bindActionCreators} from 'redux';

function mapStateToProps(storeData){
        return {
            myTrades:storeData.trades
        }
}

function mapDispatchToProps(dispatcher){
        return bindActionCreators(AllActions,dispatcher);
}

var app = connect(mapStateToProps,mapDispatchToProps)(MainComponent);
export default app;
