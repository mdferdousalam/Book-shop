import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface AuthorPublisherRouteProps {
  children: React.ReactNode;
}

const AuthorPublisherRoute: React.FC<AuthorPublisherRouteProps> = ({
  children,
}) => {
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken");
  const userRole = useSelector((state: RootState) => state.userRole);

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if userRole is 'authorPublisher'
  if (userRole.role !== "authorPublisher") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default AuthorPublisherRoute;
