import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import { jobAndData } from './components/Loaders/getJobData';
import Blogs from './components/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      {
        path: 'view/:jobId',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch(`/FeaturedJobs.json`),
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('rechart.json')
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobAndData,
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
