import { useEffect } from 'react';
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';
import NavLinks from './NavLinks';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{loggedInUser}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if(userauth) {
        dispatch({
          type: 'SET_LOGIN',
          user: userauth
        })
      } else {
        dispatch({
          type: 'SET_LOGIN',
          user: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])

  console.log('user >> ', loggedInUser)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/'>
            <Header />
            <NavLinks />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
