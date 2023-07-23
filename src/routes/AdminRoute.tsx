import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken");
  const userRole = useSelector((state: RootState) => state.userRole);

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if userRole is 'admin'
  if (userRole !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
