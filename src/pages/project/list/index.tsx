import React from "react";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useProjectListModel from "./model";

import Css from "@/styles/modules/projectList.module.scss";

const List: React.FC = () => {
  const { loading, columns, data, projectName, setProjectName, pagination } =
    useProjectListModel();

  return (
    <div className={Css.list}>
      <section className={Css.btn}>
        <Button type="primary" icon={<PlusOutlined />}>
          新增项目
        </Button>
      </section>
      <section className={Css.table}></section>
    </div>
  );
};

export default List;
