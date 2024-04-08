import { createBrowserRouter, RouterProvider } from "react-router-dom";
   import App from "../App";
   import Home from "../home/home";
   import Shop from "../shop/Shop";
   import Blog from "../components/Blog";
   import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBooks";


   const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
            { 
              path: '/',
              element: <Home/>
            },
            { 
              path: '/shop', 
              element:<Shop/>
            },
            { 
              path: '/about', 
              element:<About/>
            },
            { 
              path: '/blog', 
              element:<Blog/>
            },
            { 
              path: '/book/:id', 
              element:<SingleBook/>, 

            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    { 
      path: "/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
          {
            path:"/admin/dashboard",
            element:<Dashboard/>
          },
          {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>
          },
          {
            path:"/admin/dashboard/manage",
            element:<ManageBook/>
          },
          {
            path:"/admin/dashboard/edit-books/:id",
            element:<EditBooks/>
          },
          {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)          }
        ]
    }

  ])

  export default router;