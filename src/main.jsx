import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './assets/css/font.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import SignUp from "./pages/login/SignUp.jsx";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/singUp',
    element: <SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={routes}/>

  </React.StrictMode>,
)
