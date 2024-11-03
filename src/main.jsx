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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
