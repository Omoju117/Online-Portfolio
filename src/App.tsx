import React, { VFC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';
import About from './components/pages/About';
import Skill from './components/pages/Skill';
import Work from './components/pages/Work';

const App: VFC = () => (
  <div className="App">
    <Helmet>
      <style>{'body { background-color: #072537; }'}</style>
    </Helmet>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/skill">
          <Skill />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
