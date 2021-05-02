import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Render } from './core/ensena'
import Header from './core/navbarHeader'
import NavBar from './core/navBar'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";


Render.then(() => {
  window.$(".preloader").fadeOut();
  window.domFactory.handler.upgradeAll()

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Switch>
          <div>
            <Header />
            <div class="mdk-header-layout__content d-flex flex-column">
              <NavBar />
              <div class="page2 ">
                <App />
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
