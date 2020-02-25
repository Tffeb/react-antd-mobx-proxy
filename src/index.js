import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './main/login'
import Main from './main/pages'
import 'antd/dist/antd.css'
import './asset/css/login.css'
import './asset/css/index.css'
ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/main" component={Main}></Route>
      <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))
