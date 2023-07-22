import {createBrowserRouter} from "react-router-dom"
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";
import Registration from "../page/Registration";
import AddBook from "../page/AddBook";
import BookDetails from "../page/BookDetails";
import Profile from "../page/Profile";
import NotFound from "../page/NotFound";
const routes = createBrowserRouter([
    {
        path: "/",
        element:<App/>
    },
    {
        path: "/home",
        element:<Home></Home>
    },
    {
        path: "/login",
        element:<Login></Login>
    },
    {
        path: "/registration",
        element:<Registration></Registration>
    },
    {
        path: "/addbook",
        element:<AddBook></AddBook>
    },
    {
        path: "/bookdetails",
        element:<BookDetails></BookDetails>
    },
    {
        path: "/profile",
        element:<Profile></Profile>
    },
    {
        path: "*",
        element:<NotFound></NotFound>
    },

]);

export default routes;