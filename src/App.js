import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage.component';
const Hat = () => <div>Hats route</div>;
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
