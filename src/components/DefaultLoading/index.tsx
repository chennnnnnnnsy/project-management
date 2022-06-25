import React from "react";

import { Spin } from "antd";

import Css from "@/styles/modules/DefaultLoadingComp.module.scss";

interface IProps {
  loading: boolean;
  children: React.ReactElement;
}

const DefaultLoading: React.FC<IProps> = ({ loading, children }) => {
  return loading ? (
    <div className={Css.loading}>
      <Spin size="large"/>
    </div>
  ) : (
    children
  );
};

export default DefaultLoading;
