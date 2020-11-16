import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className='container'>
          <header className='App-header'>Movie API</header>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
