import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utilities/util";

const AuthRedirect = ({ children }: any) => {
  return !isLoggedIn() ? <Navigate to="/" /> : children;
};

export default AuthRedirect;

export const AuthLoginRedirect = ({ children }: any) => {
  return isLoggedIn() ? <Navigate to="/dashboard" /> : children;
};
