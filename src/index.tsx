import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import "./assets/media/header.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router= createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

