import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import app from './components/mainscript';
import ViewOrder from './components/viewOrder.component';
import CreateOrder from './components/createOrder.component';
import EditOrder from './components/editOrder.component';
import SignIn from './components/SignIn.component';

var router =  <Provider store={store}>
                        <Router history={browserHistory}>
                          <Route path="/" component={SignIn}></Route>
                          <Route path="/home" component={app} >
                          <IndexRoute component={CreateOrder} />
                          <Route path="/home/view/:id" component={ViewOrder} ></Route>
                          <Route path="/home/edit/:id" component={EditOrder} ></Route>
                          </Route>
                        </Router>
                    </Provider>
ReactDOM.render(router,
document.getElementById('content'));