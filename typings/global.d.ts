import React from "react";

declare global {
  interface IRoute {
    path: string; // 路径
    permission: string | null; // 权限码
    element: React.FC<any>; // 组件
    name: string;
  }
}
