import { makeObservable, observable, action } from "mobx";
import { commonRoutes, mainRoutes } from "@/permission";

class UserStore {
  routes: Array<IRoute> = commonRoutes;
  userName: string = "";
  role: string = "";
  menus: Array<IMenu> = [];

  constructor() {
    makeObservable(this, {
      routes: observable,
      actionAfterLoginSuccess: action,
    });

    const isLogin = !!sessionStorage.getItem("pm-token");
    const pmUser = JSON.parse(sessionStorage.getItem("pm-user") || "{}");
    const permissions = JSON.parse(
      sessionStorage.getItem("permissions") || "[]"
    );

    if (isLogin) {
      this.routes = [...mainRoutes, ...commonRoutes];
      this.userName = pmUser.userName || "";
      this.role = pmUser.role || "";
      this.menus = this.generateMenu(permissions, mainRoutes);
    }
  }

  getMenus(key: string, texts: any) {
    const one = this.menus.find((vo) => vo.key === key);
    const menus =
      one && one.children && one.children.length
        ? one.children.map((vo) => {
            vo.label = texts[vo.key];
            return vo;
          })
        : [];

    return menus;
  }

  generateMenu(permissions: string[], routes: IRoute[], parent?: string) {
    const menus: Array<IMenu> = [];

    for (let vo of routes) {
      if (!vo.isMenu) continue; // 不是菜单属性
      if (vo.permission && permissions.indexOf(vo.permission) === -1) continue; // 菜单有permission，但该用户没有这个权限

      let one: IMenu = { key: vo.name, label: vo.name, path: vo.path };

      if (parent) one.parent = parent;

      if (vo.children && vo.children.length) {
        one.type = "group";
        one.children = this.generateMenu(permissions, vo.children, vo.name);
      }

      menus.push(one);
    }

    return menus;
  }

  actionAfterLoginSuccess(data: any) {
    sessionStorage.setItem("pm-token", data.token);
    sessionStorage.setItem(
      "pm-user",
      JSON.stringify({
        userName: data.userName,
        role: data.role,
      })
    );
    sessionStorage.setItem("permissions", JSON.stringify(data.permissions));

    this.menus = this.generateMenu(data.permissions, mainRoutes);
    this.userName = data.userName;
    this.role = data.role;
    this.routes = [...mainRoutes, ...this.routes];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 800);
    });
  }
}

export default UserStore;
