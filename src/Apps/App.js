import 'antd/dist/antd.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import LayoutComponent from '../components/layouts/LayoutComponent';
import Login from '../pages/Login/Login';
import './App.css';
export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <div className="ground-container">
          <div className="main-container">
            <Suspense fallback={<h1>Loading...</h1>}>
              <Switch>
                <Route exact={true} path={'/login'} component={Login}></Route>
                <Route exact={true} path={'/'}>
                  <Redirect to={'/login'}></Redirect>
                </Route>
                {/* <Route exact={true} path={'*'} component={NotFount}></Route> */}
                {/* {showPage(page)} */}
                
                <LayoutComponent></LayoutComponent>
              </Switch>
              {/* <h1>this is Footer</h1> */}
            </Suspense>
          </div>
        </div>
      </Router>
    </Suspense>

  );
};
