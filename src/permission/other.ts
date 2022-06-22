import Profile from "@/pages/profile";

const otherRoutes: Array<IRoute> = [
  {
    name: "profile",
    path: "/profile",
    permission: "PMSystem-profile",
    element: Profile,
  },
];

export default otherRoutes;
