import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUserRole } from "../redux/features/user/userRoleSlice";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const accessToken = localStorage.getItem("accessToken");
  const userRole = useSelector((state: RootState) => state.userRole);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decodedToken: any = jwt_decode(accessToken);
      const decodedUserRole = decodedToken.role;
      if (userRole !== decodedUserRole) {
        dispatch(setUserRole(decodedUserRole));
      }
    }
  }, [accessToken, dispatch, userRole]);

  const handleMenuToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleLogout = () => {
    // Remove the accessToken from localStorage
    localStorage.removeItem("accessToken");
  };

  const handleDashboardClick = () => {
    if (userRole.role === "admin") {
      navigate("/adminlayout");
    } else if (userRole.role === "authorPublisher") {
      navigate("/authorPublisherlayout");
    } else if (userRole.role === "moderator") {
      navigate("/moderatorlayout");
    } else if (userRole.role === "registeredUser") {
      navigate("/registereduserlayout");
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white mr-4">
              <Link to="/" className="font-bold text-xl">
                Book Shop
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                {!accessToken ? (
                  <>
                    <Link
                      to="/login"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/registration"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Logout
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={handleDashboardClick}
                    >
                      Dashboard
                    </Link>
                    {(userRole.role === "admin" ||
                      userRole.role === "authorPublisher") && (
                      <>
                        <Link
                          to="/dashboard/addbook"
                          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Add Book
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-white p-2 hover:bg-gray-700 rounded-md focus:outline-none focus:bg-gray-700"
            >
              {showMenu ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu items */}
        {showMenu && (
          <div className="md:hidden mt-2">
            <Link
              to="/"
              className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            {!accessToken ? (
              <>
                <Link
                  to="/login"
                  className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/registration"
                  className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </Link>
                <Link
                  to="/dashboard"
                  className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </Link>
                {(userRole.role === "admin" ||
                  userRole.role === "authorPublisher") && (
                  <>
                    <Link
                      to="/addbook"
                      className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add Book
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
