import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// <button onClick={() => props.history.push('/hats/abc')}>history.push</button>

// <Link to={`${props.match.url}`}>GoGoGO</Link>

class App extends Component {
  // <Link to='/hats'>GoHats</Link>
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(Snapshot => {
          this.setState({
            currentUser: {
              id: Snapshot.id,
              ...Snapshot.data()
            }
          },
            () => {
              console.log(this.state);
            }
          )

        })

      }
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>


      </div >

    );
  }
}

export default App;
