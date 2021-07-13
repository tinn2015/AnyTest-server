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
import { Button } from 'antd'
import { logout } from './utils/http'
import './App.css';

@observer
class App extends Component {

  componentDidUpdate () {
    console.log('mountex')
  }

  logout = () => {
    logout()
  }
  
  render () {
    const {isLogin} = globalStore
    console.log(isLogin, 'app')
    return (
      <div className="App wh-full">
        <Router>
          <div className="home">
            {
              isLogin ? <div>已登录<Button onClick={this.logout} type="link" size="small">【退出】</Button></div> : null
            }
            {
              isLogin ? <Redirect to="/panel"/> :
              <Redirect to="/login"/>
            }
          </div>
          <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/panel">
                <Panel/>
              </PrivateRoute>
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
