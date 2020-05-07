import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

    
    // <button onClick={() => props.history.push('/hats/abc')}>history.push</button>

    // <Link to={`${props.match.url}`}>GoGoGO</Link>
    
const App = (props) => {
  // <Link to='/hats'>GoHats</Link>

  return (
    <div>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />

      </Switch>


    </div>

  );
}

export default App;
