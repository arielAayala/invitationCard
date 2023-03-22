import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import "./assets/media/header.css"
import "./assets/media/animation.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Confirmados from './containers/Confirmados';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router= createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },{
    path: "/confirmados",
    element: <Confirmados></Confirmados>,
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

