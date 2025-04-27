import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./public";
import { PrivateRoutes } from "./private";
import ProtectedRoute from "./protectd";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}

        {PrivateRoutes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
