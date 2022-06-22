import NotFound from "@/pages/notFound";
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
    element: NotFound,
  },
];

export default routes;
