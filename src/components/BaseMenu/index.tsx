import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useRootStore from "@/store";
import { Menu } from "antd";

interface IProps {
  module: string;
}

const BaseMenu: React.FC<IProps> = ({ module }) => {
  const { user, i8n } = useRootStore();
  const texts: any = i8n.getLocaleTexts<IMenusLT>("menus");
  const menus: any = user.getMenus(module, texts);

  const location = useLocation();

  const [selectKeys] = useState(() => {
    const str = location.pathname.replace(/\//g, "-").slice(1);
    return [str];
  });

  const toPage = (vo: any) => {
    console.log(vo);
  };

  return (
    <section className="menus">
      <Menu
        onClick={toPage}
        defaultSelectedKeys={selectKeys}
        style={{ width: "100%" }}
        mode="inline"
        items={menus}
      />
    </section>
  );
};

export default BaseMenu;
