import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import CardDetails from "../Pages/CardDetails/CardDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoutes from "./PrivateRoutes";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/careers/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/careers/${params.id}`),
        hydrateFallbackElement: <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      },
      {
        path: '/jobApply/:id',
        element:
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
      },
      {
        path: '/myApplications',
        element:
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
      },
      {
        path: '/addJob',
        element:
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
      },
      {
        path: '/myPostedJobs',
        element:
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>,
      },
      {
        path: '/applications/:id',
        element:
          <PrivateRoutes>
            <ViewApplications></ViewApplications>
          </PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:3000/applications/job/${params.id}`),
        hydrateFallbackElement: <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }
    ]
  },
]);