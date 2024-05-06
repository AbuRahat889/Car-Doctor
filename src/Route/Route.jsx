import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../Components/Home/Home";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import ServiceDetails from "../Components/Home/Details/ServiceDetails";
import CheckOut from "../Components/CheckOut/CheckOut";
import AllServices from "../Components/AllServices/AllServices";
import AboutUs from "../Components/AboutUs/AboutUs";
import CartPage from "../Components/Cart Details/CartPage";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/allservices',
          element:<AllServices></AllServices>

        },
        {
          path:'/aboutus',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>,
        },
        {
          path:'/details/:id',
          element:<ServiceDetails></ServiceDetails>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/cartpage',
          element:<PrivateRoute>
            <CartPage></CartPage>
          </PrivateRoute>
          ,
        }
      ]
    },
  ]);

  export default router;

  