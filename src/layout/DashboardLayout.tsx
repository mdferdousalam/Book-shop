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
  const handleRoleRequest = () => {
    // Implement the logic to handle the role request.
    // For example, you can redirect the user to a new page with a form.
    // Alternatively, you can display a modal with the form inside the dashboard.
  };
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
                <li>
                  <Link to="/dashboard/allBooks">All Books</Link>
                </li>
              </>
            )}

            {userRole === "authorPublisher" && (
              <>
                <li>
                  <Link to="/dashboard/addbook">Add Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybooks">My Products</Link>
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
              </>
            )}
            {userRole === "registeredUser" && (
              <>
                <li>{/* <Link to="/dashboard/orders">My Orders</Link> */}</li>
                <li>
                  <Link to="/dashboard/wishlist">My Wish List</Link>
                </li>
                <li>
                  <button
                    onClick={handleRoleRequest}
                    className="text-indigo hover:bg-gray-700 hover:text-white py-2 rounded-md text-sm font-medium"
                  >
                    Request Role
                  </button>
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
