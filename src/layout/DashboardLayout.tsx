import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";
import UseTitle from "../hooks/UseTitle";
import jwt_decode from "jwt-decode";

const DashboardLayout = () => {
  UseTitle("Dashboard");
  const accessToken = localStorage.getItem("accessToken");
  let userRole: string = " ";
  if (accessToken) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decodedToken: any = jwt_decode(accessToken);
    userRole = decodedToken.role;
  }
 
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="md:flex">
        {/* Sidebar */}
        <div className="bg-accent text-indigo min-h-screen py-4 px-2 md:w-80">
          <div className="text-2xl font-bold px-4 py-2">
            Welcome, {userRole}
          </div>
          <ul className="menu p-4">
            {userRole === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/">All Users</Link>
                </li>
               
              </>
            )}

            {userRole === "authorPublisher" && (
              <> <li>
              <Link to="/dashboard/orders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/wishlist">Wish List</Link>
            </li>
                <li>
                  <Link to="/dashboard/addbook">Add Books</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybooks">My Books</Link>
                </li>
              </>
            )}

            {userRole === "moderator" && (
              <>
                <li>
                  <Link to="/dashboard/orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/wishlist">Wish List</Link>
                </li>
                <li>
                  <Link to="/dashboard/addbook">Add Books</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybooks">My Books</Link>
                </li>
              </>
            )}
            {userRole === "registeredUser" && (
              <>
                <li><Link to="/dashboard/orders">My Orders</Link></li>
                <li>
                  <Link to="/dashboard/wishlist">My Wish List</Link>
                </li>
                <li>
                  <Link to="/dashboard/addbook">Add Books</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybooks">My Books</Link>
                </li>
              
              </>
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div className="p-4 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
