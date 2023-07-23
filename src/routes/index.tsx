import {createBrowserRouter} from "react-router-dom"
import Home from "../page/Home/Home";
import App from "../App";
import Login from "../page/Login/Login";
import Registration from "../page/Registration/Registration";
import AddBook from "../page/Books/AddBook";
import BookDetails from "../page/Books/BookDetails";
import Profile from "../page/Profile/Profile";
import NotFound from "../page/ErrorPage/NotFound";
import RegisteredUserLayout from "../layout/registeredUserLayout";
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
        path: "/registereduserlayout",
        element:<RegisteredUserLayout children={undefined}></RegisteredUserLayout>
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