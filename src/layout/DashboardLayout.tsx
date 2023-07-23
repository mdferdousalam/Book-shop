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
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-accent text-xl text-white">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  ">
            {userRole === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/books">ALL Books</Link>
                </li>
              </>
            )}

            {userRole === "authorPublisher" && (
              <>
                <li>
                  <Link to="/dashboard/buyers">My </Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproducts">My Products</Link>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
