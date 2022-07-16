import ProjectLayout from "@/components/ProjectLayout";
import List from "@/pages/project/list";
import Features from "@/pages/project/features";

const projectRoutes: Array<IRoute> = [
  {
    name: "project",
    isMenu: true,
    path: "/project",
    permission: "PMSystem-project",
    direct: "/project/list",
    element: ProjectLayout,
    children: [
      {
        name: "project-list",
        isMenu: true,
        path: "list",
        permission: "PMSystem-project-list",
        element: List,
      },
      {
        name: "project-features",
        isMenu: true,
        path: "features",
        permission: null, // TODO: add permission code
        element: Features,
      },
    ],
  },
];

export default projectRoutes;
