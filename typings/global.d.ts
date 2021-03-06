import React from "react";

declare global {
  interface IRoute {
    path: string; // 路径
    permission: string | null; // 权限码
    element: React.FC<any>; // 组件
    name: string;
    isMenu?: boolean;
    children?: Array<IRoute>;
    direct?: string;
  }

  interface IObject {
    [s: string]: any;
  }

  interface IRequestOpt {
    url: string;
    params?: any;
    headers?: any;
    method: "get" | "post" | "update" | "delete";
  }

  interface IResponseSuccessData<T> {
    message: string;
    isSuccess: boolean;
    result: T;
    code: string;
  }

  interface IMenu {
    parent?: string;
    key: string;
    icon?: string;
    children?: Array<IMenu>;
    label: string;
    type?: string;
    path?: string;
  }

  interface IPaginationParams {
    current: number;
    pageSize: number;
  }

  interface IPage<T> {
    content: Array<T>;
    current: number; //(integer, optional);
    pageSize: number;
    total: number; //(integer, optional);
  }
}
