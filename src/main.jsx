import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Home.jsx';
import { Shop } from './Shop/Shop.jsx';
import { ErrorPage } from './ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        
        path:"home",
        element:<Home/>
      },
      {
        path:"shop",
        element:<Shop/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
