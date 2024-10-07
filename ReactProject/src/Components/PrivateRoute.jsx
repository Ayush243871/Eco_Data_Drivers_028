import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/AuthComponent" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired, // Ensure children is marked as required
};

export default PrivateRoute;
