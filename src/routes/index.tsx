import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import AddBook from "../page/Books/AddBook";
import BookDetails from "../page/Books/BookDetails";
import Profile from "../page/Profile/Profile";
import NotFound from "../page/ErrorPage/NotFound";
import MainLayout from "../layout/MainLayout";
import Welcome from "../page/Dashboard/Welcome";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import AdminRoute from "./AdminRoute";
import Wishlist from "../page/WishList/Wishlist";
import AuthorPublisherRoute from "./AuthorPublisherRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      //   {
      //     path: "/apple",
      //     element: (
      //       <PrivateRoute>
      //         <AppleCategory></AppleCategory>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/samsung",
      //     element: (
      //       <PrivateRoute>
      //         <SamsungCategory></SamsungCategory>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/oppo",
      //     element: (
      //       <PrivateRoute>
      //         <OppoCategory></OppoCategory>
      //       </PrivateRoute>
      //     ),
      //   },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/dashboard",
        element: <Welcome></Welcome>,
      },
      //   {
      //     path: "/dashboard/allsellers",
      //     element: (
      //       <AdminRoute>
      //         <AllSeller></AllSeller>
      //       </AdminRoute>
      //     ),
      //   },
      //   {
      //     path: "/dashboard/allbuyers",
      //     element: (
      //       <AdminRoute>
      //         <AllBuyers></AllBuyers>
      //       </AdminRoute>
      //     ),
      //   },
      //   {
      //     path: "/dashboard/reportedproducts",
      //     element: (
      //       <AdminRoute>
      //         <Reportedproducts></Reportedproducts>
      //       </AdminRoute>
      //     ),
      //   },
      //   {
      //     path: "/dashboard/orders",
      //     element: <MyOrders></MyOrders>,
      //   },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/dashboard/addbook",
        element: (
          <AdminRoute>
            <AuthorPublisherRoute>
              <AddBook></AddBook>
            </AuthorPublisherRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/bookdetails",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
