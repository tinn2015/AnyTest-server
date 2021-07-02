import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import { observer } from 'mobx-react'
import PrivateRoute from './components/PrivateRoute/'
import Login from './pages/login'
import Panel from './pages/panel'
import globalStore from './store/index'
import Cors from './components/cors'
import './App.css';

@observer
class App extends Component {

  componentDidUpdate () {
    console.log('mountex')
  }
  
  render () {
    const {isLogin} = globalStore
    console.log(isLogin, 'app')
    return (
      <div className="App wh-full">
        <Router>
          <div className="home">
            {
              isLogin ? <div>已登录 【退出】</div> : null
            }
            {
              isLogin ? <Redirect to="/panel"/> :
              <Redirect to="/login"/>
            }
          </div>
          <Switch>
              <Route path="/panel">
                <Panel/>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/cors">
                <Cors/>
              </PrivateRoute>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
