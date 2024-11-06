import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';

import Home from './Home';
import GadgetsCategory from './Components/Gadgets/GadgetsCategory';
import Statistics from './Components/Statistics';
import Dashboard from './Components/Dashboard';
import GadgetsDetails from './Components/Gadgets/GadgetsDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from './Components/Services';
import ErrorPage from './ErrorPage';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: '/',
            element: <GadgetsCategory></GadgetsCategory>,
            loader: () => fetch('/gadgets.json')
          },
          {
            path: '/gadgets/:category',
            element: <GadgetsCategory></GadgetsCategory>,
            loader: () => fetch('/gadgets.json')
          },
        ]
      },
      {
        path:'/statistice',
        element:<Statistics></Statistics>,
        loader:() => fetch('/gadgets.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>

      },
      {
        path:'/service',
        element:<Services></Services>,
        loader:()=>fetch('/service.json')
      },
      {
        path:'/details/:GId',
        element:<GadgetsDetails></GadgetsDetails>,
        loader: () => fetch('/gadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
