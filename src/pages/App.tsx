import React from "react";
import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";

import { observer } from "mobx-react-lite";
import useRootStore from "@/store";

const App: React.FC = () => {
  const { i8n, router } = useRootStore();
  return (
    <div className="App">
      <ConfigProvider locale={i8n.antdLocale}>
        <Routes>
          {router.commonRoutes.map((vo: IRoute) => (
            <Route key={vo.name} path={vo.path} element={<vo.element />} />
          ))}
        </Routes>
      </ConfigProvider>
    </div>
  );
};

export default observer(App);
