import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { icons } from './assets/icons'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'antd/dist/antd.css';
import AuthContextProvider from './contexts/auth';
import { initFacebookSdk } from './helpers/facebook/Facebook_InitSDK';


// initFacebookSdk().then(startApp);
React.icons = icons
// function startApp(){
  ReactDOM.render(
    <Provider store={store}>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </Provider>,
    document.getElementById('root')
  );
// }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
