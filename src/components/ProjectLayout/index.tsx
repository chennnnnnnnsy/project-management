import React, { useEffect } from "react";
import BaseLayout from "@/components/BaseLayout";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import BaseMenu from "@/components/BaseMenu";

const ProjectLayout: React.FC<any> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/project") {
      navigate("/project/list");
    }
  });

  return (
    <BaseLayout>
      <main className="layout">
        <BaseMenu module="project" />
        <section className="layout-right">
          <Outlet />
        </section>
      </main>
    </BaseLayout>
  );
};

export default ProjectLayout;
