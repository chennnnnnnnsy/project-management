import { useState, useEffect } from "react";
import { postProjectList } from "@/api/project";
import usePagination from "@/hooks/usePagination";

import type { ProjectListRes } from "@/api/project";

const useProjectListModel = () => {
  const [projectName, setProjectName] = useState("");
  const { run, loading, data, pagination } = usePagination(postProjectList);

  useEffect(() => {
    run({ current: 1, pageSize: 10 }, { projectName });
  }, [projectName]);

  const toSearch = (e: any) => {
    setProjectName(e.target.value);
  };

  const toPage = (row: ProjectListRes) => {
    console.log("toPage", row);
  };

  return { loading, data, toPage, projectName, toSearch, pagination };
};

export default useProjectListModel;
