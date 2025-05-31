import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import CardDetails from "../Pages/CardDetails/CardDetails";

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
      }
    ]
  },
]);