import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./public";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
