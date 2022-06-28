import commonRoutes from "./common";
import otherRoutes from "./other";
import projectRoutes from './project'

const mainRoutes = [...otherRoutes, ...projectRoutes];

export { commonRoutes, mainRoutes };
