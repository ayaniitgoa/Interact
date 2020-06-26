import React from 'react';
import './App.css';
import 'bootstrap';
import Navbar from './components/Navbar';
import Login from './containers/Login';
import Register from './containers/Register';
import { Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Questions from './containers/Questions';
import About from './containers/About';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/profile/:id'>
          <Profile />
        </Route>
        <Route exact path='/questions'>
          <Questions />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route>404</Route>
      </Switch>
    </div>
  );
}

export default App;
