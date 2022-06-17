import commonRoutes from "./common";
import { Route } from "react-router-dom";

function generateCommonRoutes() {
  return commonRoutes.map((vo) => (
    <Route key={vo.name} path={vo.path} element={<vo.element />} />
  ));
}

export { generateCommonRoutes };
