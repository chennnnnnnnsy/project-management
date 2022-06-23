import { makeObservable, observable, action } from "mobx";
import { commonRoutes, mainRoutes } from "@/permission";

class UserStore {
  routes: Array<IRoute> = commonRoutes;

  constructor() {
    makeObservable(this, {
      routes: observable,
      actionAfterLoginSuccess: action,
    });

    const isLogin = !!sessionStorage.getItem("pm-token");
    if (isLogin) {
      this.routes = [...mainRoutes, ...commonRoutes];
    }
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

    this.routes = [...mainRoutes, ...this.routes];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 800);
    });
  }
}

export default UserStore;
