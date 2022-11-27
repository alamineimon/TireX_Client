import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import ManageUser from "../../Pages/Dashboard/ManageUser/ManageUser";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import KhawasakiBike from "../../Pages/Home/AllServices/KhawashakiBike/KhawasakiBike";
import KtmBike from "../../Pages/Home/AllServices/KtmBike/KtmBike";
import YamahaBike from "../../Pages/Home/AllServices/YamahaBike/YamahaBike";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <AllServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/yamahabike",
        element: (
          <PrivateRoute>
            <YamahaBike />
          </PrivateRoute>
        ),
      },
      {
        path: "/kawashakibike",
        element: (
          <PrivateRoute>
            <KhawasakiBike />
          </PrivateRoute>
        ),
      },
      {
        path: "/ktmbike",
        element: (
          <PrivateRoute>
            <KtmBike />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: <ManageUser></ManageUser>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>
      },
    ],
  },
]);

export default router;
