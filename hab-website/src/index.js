import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './aboutpage/About';
import Media from './mediapage/Media';
import GroundControl from './groundcontrolpage/GroundControl'
import Docs from './documentation/Docs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: 'about',
    element: <About/>
  },
  {
    path: 'media',
    element: <Media/>
  },
  {
    path: 'ground-control',
    element: <GroundControl/>
  },
  {
    path: 'documentation',
    element: <Docs/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
