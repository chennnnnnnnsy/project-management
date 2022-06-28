import React from "react";
import BaseLayout from "@/components/BaseLayout";
import { Outlet } from "react-router-dom";

const ProjectLayout: React.FC<any> = () => {
  // TODO: 加入一个侧边菜单
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};

export default ProjectLayout;
