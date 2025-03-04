import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';                           // importing app to render it
import { BrowserRouter} from 'react-router-dom';   //using to route to specific web pages
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './i18n';

ReactDOM.render(
  <BrowserRouter>
        <App />
    </BrowserRouter>, 
  document.getElementById('root')               //specifing the element to target 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
