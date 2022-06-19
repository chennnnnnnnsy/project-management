import React from "react";
import { Routes } from "react-router-dom";
import { generateCommonRoutes } from "@/permission";
import { ConfigProvider } from "antd";
import useRootStore from "@/store";
import { observer } from "mobx-react-lite"

const App: React.FC = () => {
  const { i8n } = useRootStore();
  return (
    <div className="App">
      <ConfigProvider locale={i8n.antdLocale}>
        <Routes>{generateCommonRoutes()}</Routes>
      </ConfigProvider>
    </div>
  );
};

export default observer(App);
