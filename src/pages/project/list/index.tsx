import React from "react";
import { Button, Table, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import useProjectListModel from "./model";

import Css from "@/styles/modules/projectList.module.scss";

const List: React.FC = () => {
  const { loading, columns, data, projectName, toSearch, pagination } =
    useProjectListModel();

  return (
    <div className={Css.list}>
      <section className={Css.search}>
        <Input
          className={Css.searchInput}
          defaultValue={projectName}
          suffix={<SearchOutlined />}
          placeholder="输入项目名搜索"
          onPressEnter={toSearch}
        />
        <Button type="primary" icon={<PlusOutlined />}>
          新增项目
        </Button>
      </section>
      <section className={Css.table}></section>
    </div>
  );
};

export default List;
