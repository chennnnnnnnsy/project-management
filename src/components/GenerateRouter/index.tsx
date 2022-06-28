import React from "react";
import { Routes } from "react-router-dom";
import BaseRoutes from "./baseRoute";

interface IProps {
  routes: Array<IRoute>;
}

function pipe(routes: Array<IRoute>, permission: Array<string>) {
  const arr = [];

  for (let vo of routes) {
    let childrenArr: React.ReactElement[] = [];

    if (vo.children && vo.children.length) {
      childrenArr = pipe(vo.children, permission);
    }

    if (!vo.permission) {
      // 无权限
      arr.push(BaseRoutes(vo, "", childrenArr));
    } else if (vo.permission && permission.length) {
      // 有权限且已登录
      const isAuth = permission.indexOf(vo.permission) > -1;

      isAuth
        ? arr.push(BaseRoutes(vo, "permission", childrenArr))
        : arr.push(BaseRoutes(vo, "not-permission"));
    } else {
      // 有权限且未登录
      arr.push(BaseRoutes(vo, "not-permission"));
    }
  }

  return arr;
}

const GenerateRouter: React.FC<IProps> = ({ routes }) => {
  let permission = JSON.parse(sessionStorage.getItem("permissions") || "[]");

  const arr: React.ReactElement[] = pipe(routes, permission);

  return <Routes>{arr}</Routes>;
};

export default GenerateRouter;
