import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
      
      </div>
      )
    };
    
    // <button onClick={() => props.history.push('/hats/abc')}>history.push</button>

    // <Link to={`${props.match.url}`}>GoGoGO</Link>
    
const App = (props) => {
  // <Link to='/hats'>GoHats</Link>

  return (
    <div>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />

      </Switch>


    </div>

  );
}

export default App;
