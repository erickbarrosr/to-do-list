import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const PublicRoutes = [
  { path: "/", element: <Navigate to="/login" /> },
  { path: "/cadastro", element: <SignUp /> },
  { path: "/login", element: <Login /> },
];
