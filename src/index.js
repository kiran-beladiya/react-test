import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store} >
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
