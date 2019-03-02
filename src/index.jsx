import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Import Components
import App from './components/app';

// ReactDOM.render(
//   <App/>
//   ,
//   document.getElementById('react-app-root')
// );

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <Component/>
    </BrowserRouter>
  , document.getElementById('react-app-root'));
}

render(App);