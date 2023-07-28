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
import Wishlist from "../page/WishList/Wishlist";
import AllBooks from "../page/Books/AllBooks";

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
      {
        path: "/bookdetails",
        element: <BookDetails></BookDetails>,
      },
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
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/dashboard/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/dashboard/books",
        element: <AllBooks></AllBooks>,
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
