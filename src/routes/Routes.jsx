import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Registro from '../pages/Registro';
import NavRouter from './NavRouter';

const Routes = () => (
  <Switch>
    <NavRouter path="/Login">
      <Login />
    </NavRouter>
    <Route path="/Home">
      <Home />
    </Route>
    <Route path="/Registro">
      <Registro />
    </Route>
  </Switch>
);

export default Routes;
