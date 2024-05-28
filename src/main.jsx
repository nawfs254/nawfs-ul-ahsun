import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-glory'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)