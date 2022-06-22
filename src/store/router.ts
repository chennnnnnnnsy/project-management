import { makeObservable, observable, action } from "mobx";
import { commonRoutes, mainRoutes } from "@/permission";

// TODO: 登录后经过权限处理，得出有无权限的路由，然后生成<Route />
// 创建一个接受路由生成 <Route /> 的 React.FC

class RouterStore {
  commonRoutes: Array<IRoute> = commonRoutes;
  notPermissionRoutes: Array<IRoute> = [];

  constructor() {
    makeObservable(this, {
      commonRoutes: observable,
      filterRouteByAuth: action,
    });
  }

  filterRouteByAuth() {
    const routes = mainRoutes;
  }
}

export default RouterStore;
