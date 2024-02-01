// // import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { Outlet } from 'react-router-dom'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Outlet>
//     <App />
//   </Outlet>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </BrowserRouter>
);
