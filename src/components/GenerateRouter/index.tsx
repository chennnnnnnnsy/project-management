import React from "react";
import { Routes } from "react-router-dom";
import BaseRoutes from "./baseRoute";

interface IProps {
  routes: Array<IRoute>;
}

const GenerateRouter: React.FC<IProps> = ({ routes }) => {
  const arr: React.ReactElement[] = [];
  let permission = JSON.parse(sessionStorage.getItem("permissions") || "[]");

  for (let vo of routes) {
    if (!vo.permission) {
      // 无权限
      arr.push(BaseRoutes(vo));
    } else if (vo.permission && permission.length) {
      // 有权限且已登录
      const isAuth = permission.indexOf(vo.permission) > -1;

      isAuth
        ? arr.push(BaseRoutes(vo, "permission"))
        : arr.push(BaseRoutes(vo, "not-permission"));
    } else {
      // 有权限且未登录
      arr.push(BaseRoutes(vo, "not-permission"));
    }
  }
  return <Routes>{arr}</Routes>;
};

export default GenerateRouter;
