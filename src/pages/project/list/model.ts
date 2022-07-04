import { useState, useEffect } from "react";
import { postProjectList } from "@/api/project";
import usePagination from "@/hooks/usePagination";

const useProjectListModel = () => {
  const columns = [
    {
      title: "项目名",
      dataIndex: "projectName",
    },
    {
      title: "版本号",
      dataIndex: "version",
    },
    {
      title: "类型",
      dataIndex: "type",
    },
  ];

  const [projectName, setProjectName] = useState("");
  const { run, loading, data, pagination } = usePagination(postProjectList);

  useEffect(() => {
    run({ current: 1, pageSize: 10 }, { projectName });
  }, [projectName]);

  const toSearch = (e: any) => {
    setProjectName(e.target.value);
  };

  return { columns, loading, data, projectName, toSearch, pagination };
};

export default useProjectListModel;
