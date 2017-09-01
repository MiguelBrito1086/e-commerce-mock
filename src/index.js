import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import Contact from './components/Contact';
import Cups from './components/Cups';
import Flasks from './components/Flasks';
import Home from './components/Home';
import Mugs from './components/Mugs';
import Platters from './components/Platters';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Cups' component={Cups} />
        <Route exact path='/Flasks' component={Flasks} />
        <Route exact path='/Mugs' component={Mugs} />
        <Route exact path='/Platters' component={Platters} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
