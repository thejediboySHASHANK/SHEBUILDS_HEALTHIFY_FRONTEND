import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbR from './NavBar/NavBar';
import Hero from './Hero/Hero';
import Calculate from './Calculate/Calculate';
import OtherComponent from './ResultsPage/ResultsPage';
import Steps from './Steps/Steps';

// IMPORTING BROWSEROUTES OF REACT FOR MULTIPLE PAGES 
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <NavbR />
        <Hero />
        <Calculate />
      </div>,
  },
  {
    path: "/prediction",
    element:
      <div>
        <OtherComponent />
      </div>
  },
  {
    path: "/steps",
    element:
      <div>
        <NavbR />
        <Steps />

      </div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <NavbR />
      <Hero />
      <Calculate /> */}
      {/* <h1>Hello World!</h1> */}
    </RouterProvider>
  </React.StrictMode>
);
