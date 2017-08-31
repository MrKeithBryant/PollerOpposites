import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './Component/BaseLayout.js';
import Homepage from './Component/Homepage.js';
import Rewards from './Component/Rewards.js';
import AboutUs from './Component/AboutUs.js';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' Component={Homepage}/>
        <Route path='/Rewards' Component={Rewards}/>
        <Route path='/AboutUs' Component={AboutUs}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
