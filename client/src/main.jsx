import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RelatedSearch } from './components/RelatedSearch.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
  </React.StrictMode>,
)
