import React from "react";
import { Route, Navigate } from "react-router-dom";
import VerifyAuthHOC from "@/components/VerifyAuth";

type TType = "not-permission" | "permission" | "";

const BaseRoutes = (
  vo: IRoute,
  type?: TType,
  children?: Array<React.ReactElement>
) => {
  let el: React.ReactElement;

  switch (type) {
    case "not-permission":
      el = (
        <Route
          path={vo.path}
          key={vo.name}
          element={<Navigate to="/not-permission" />}
        />
      );
      break;
    case "permission":
      el = (
        <Route key={vo.name} path={vo.path} element={VerifyAuthHOC(vo.element)}>
          {children}
        </Route>
      );
      break;
    default:
      el = (
        <Route key={vo.name} path={vo.path} element={<vo.element />}>
          {children}
        </Route>
      );
      break;
  }

  return el;
};

export default BaseRoutes;
