import React from "react";
import { Button, Table, Input, Space } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import useProjectListModel from "./model";

import Css from "@/styles/modules/projectList.module.scss";

const List: React.FC = () => {
  const { toPage, loading, data, projectName, toSearch, pagination } =
    useProjectListModel();

  const typeToName = (type: number) => {
    const arr = ["前端", "后端"];
    return arr[type];
  };

  const typeClassName = (type: number) => {
    const css = !type ? Css.fe : Css.ee;
    return Css.type + " " + css;
  };

  const columns = [
    {
      title: "项目名",
      dataIndex: "projectName",
    },
    {
      title: "版本号",
      dataIndex: "version",
      render: (_: any, row: any) => <span>v{row.version}</span>,
    },
    {
      title: "类型",
      dataIndex: "type",
      render: (_: any, row: any) => (
        <div className={typeClassName(row.type)}>{typeToName(row.type)}</div>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_: any, row: any) => (
        <Button type="link" onClick={() => toPage(row)}>
          详情
        </Button>
      ),
    },
  ];

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
      <section className={Css.table}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={pagination}
          loading={loading}
        />
      </section>
    </div>
  );
};

export default List;
