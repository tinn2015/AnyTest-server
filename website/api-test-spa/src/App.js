import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/'
import Login from './pages/login'
import Panel from './pages/panel'
import globalStore from './store/index'
import './App.css';

function App() {
  const {isLogin} = globalStore
  console.log(isLogin, 'app')
  return (
    <div className="App wh-full">
      <Router>
        <div className="home">
          {
            isLogin ? <div>已登录</div> : <div>请登录</div>
          }
        </div>
        <Switch>
            <Route path="/public">
              {/* <PublicPage /> */}
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/panel">
              <Panel/>
            </PrivateRoute>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
