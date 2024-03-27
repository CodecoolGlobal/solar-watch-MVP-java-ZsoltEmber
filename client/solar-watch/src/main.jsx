import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateUser from "./component/CreateUser.jsx";
import LogInUser from "./component/LogInUser.jsx";
import Main from "./component/Main.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/register",
        element: <CreateUser/>
    },
    {
        path: "/logIn",
        element: <LogInUser/>
    },
    {
        path: "/main",
        element: <Main/>
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
