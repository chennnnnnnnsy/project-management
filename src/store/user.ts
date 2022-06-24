import { makeObservable, observable, action } from "mobx";
import { commonRoutes, mainRoutes } from "@/permission";

class UserStore {
  routes: Array<IRoute> = commonRoutes;
  userName: string = '';
  role: string = '';

  constructor() {
    makeObservable(this, {
      routes: observable,
      actionAfterLoginSuccess: action,
    });

    const isLogin = !!sessionStorage.getItem("pm-token");
    const pmUser = JSON.parse(sessionStorage.getItem('pm-user') || "{}")
    if (isLogin) {
      this.routes = [...mainRoutes, ...commonRoutes];
      this.userName = pmUser.userName || '';
      this.role = pmUser.role || '';
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
