import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './routes/Login/index'
import Home from './routes/Home/index'
import Demo from './routes/Demo/index'
import './assets/font/iconfont.css'
// import Login from './routes/Login2/index'
// import Index from './routes/Index/index'
// import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/demo' component={Demo}/>
        {/*<PrivateRoute path='/' component={Index}/>*/}
      </Switch>
  );
}

export default App;
