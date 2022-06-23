import React from "react";
import { ConfigProvider } from "antd";
import GenerateRouter from "@/components/GenerateRouter";

import { observer } from "mobx-react-lite";
import useRootStore from "@/store";

const App: React.FC = () => {
  const { i8n, user } = useRootStore();
  return (
    <div className="App">
      <ConfigProvider locale={i8n.antdLocale}>
        <GenerateRouter routes={user.routes} />
      </ConfigProvider>
    </div>
  );
};

export default observer(App);
