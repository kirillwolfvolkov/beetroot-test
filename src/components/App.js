import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Contracts from './Contracts';
import Customers from './Customers';
import Home from './Home';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/customers' component={Customers} />
      <Route exact path='/contracts' component={Contracts} />
    </Switch>
  </BrowserRouter>
);

export default App
