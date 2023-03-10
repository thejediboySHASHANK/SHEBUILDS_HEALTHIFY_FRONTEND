import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbR from './NavBar/NavBar';
import Hero from './Hero/Hero';
import Calculate from './Calculate/Calculate';
import OtherComponent from './ResultsPage/ResultsPage';
import Steps from './Steps/Steps';

// IMPORTING BROWSEROUTES OF REACT FOR MULTIPLE PAGES 
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
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
    <RouterProvider router={router} basename="SHEBUILDS_HEALTHIFY_FRONTEND">
      {/* <NavbR />
      <Hero />
      <Calculate /> */}
      {/* <h1>Hello World!</h1> */}
    </RouterProvider>
  </React.StrictMode>
);
