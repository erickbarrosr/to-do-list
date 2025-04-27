import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

export const LazyRoutes = [{ path: "/home", element: <Home /> }];
