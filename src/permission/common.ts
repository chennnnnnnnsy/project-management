import Page404 from "@/pages/404";
import Login from "@/pages/login";
import NotPermission from "@/pages/notPermission";
import Home from "@/pages/home";

const routes: Array<IRoute> = [
  {
    name: "home",
    path: "/",
    permission: null,
    element: Home,
  },
  {
    name: "not-permission",
    path: "/not-permission",
    permission: null,
    element: NotPermission,
  },
  {
    name: "login",
    path: "/login",
    permission: null,
    element: Login,
  },
  {
    name: "notFound",
    path: "/*",
    permission: null,
    element: Page404,
  },
];

export default routes;
