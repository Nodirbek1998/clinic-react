import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import Home from './component/Home';
import NotFound from './component/exceptions/NotFound';
import ListRegister from './component/ListRegister';
import Login from './component/authtication/Login';
import Admin from './component/admin/Queue';
import jwt_decode from 'jwt-decode';
import Doctor from './component/doctor/Doctor';
import setJWToken from './utils/setJWToken';
import {GET_TOKEN} from './actions/Types';
import PrivateRoute from './component/common/PrivateRoute';
import addDoctor from './component/admin/addDoctor';


const token = localStorage.jwtToken;
if (token) {
    setJWToken(token);
    const decoded = jwt_decode(token)
    store.dispatch({
        type: GET_TOKEN,
        payload: decoded
    })

   
}


class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App"> 
              <Route exact path="/" component={Home}/>
              <Route exact path='/listRegister/:id' component={ListRegister} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/addDoctor' component={addDoctor} />
          </div> 
          <Switch>
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/doctor" component={Doctor} />
          </Switch>
              <Route exact path="/"  component={NotFound} />
        </BrowserRouter>
      </Provider>
    );
  }
};

export default  (App);
