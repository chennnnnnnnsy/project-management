import ProjectLayout from "@/components/ProjectLayout";
import List from "@/pages/project/list";

const projectRoutes: Array<IRoute> = [
  {
    name: "project",
    isMenu: true,
    path: "/project",
    permission: "PMSystem-project",
    element: ProjectLayout,
    children: [
      {
        name: "project-list",
        isMenu: true,
        path: "list",
        permission: "PMSystem-project-list",
        element: List,
      },
    ],
  },
];

export default projectRoutes;
