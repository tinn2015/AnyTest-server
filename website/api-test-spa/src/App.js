import React from "react";
import { Tag } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import './App.css';

import { getRandomColor } from './utils'

function App() {
  return (
    <div className="App wh-full">
      <Router>
        <div className="home">
          <div className="title text-center">前后端测试</div>
          <ul className="mt40">
            <li><Tag className="ft24 my-tag text-center" color={getRandomColor()}>跨域请求</Tag></li>
          </ul>
        </div>
        <Switch>
            <Route path="/public">
              {/* <PublicPage /> */}
            </Route>
            <Route path="/login">
              {/* <LoginPage /> */}
            </Route>
            {/* <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
