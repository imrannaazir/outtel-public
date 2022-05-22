import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.init";

function RequiredAuth({ children }) {
  const location = useLocation();
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
export default RequiredAuth;
