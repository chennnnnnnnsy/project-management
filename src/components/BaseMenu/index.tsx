import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useRootStore from "@/store";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

import Css from "@/styles/modules/BaseMenuComp.module.scss";

interface IProps {
  module: string;
}

const BaseMenu: React.FC<IProps> = ({ module }) => {
  const { user, i8n } = useRootStore();
  const texts: any = i8n.getLocaleTexts<IMenusLT>("menus");
  const menus: IMenu[] = user.getMenus(module, texts);

  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(true);

  const location = useLocation();

  const [selectKeys] = useState(() => {
    const str = location.pathname.replace(/\//g, "-").slice(1);
    return [str];
  });

  const toPage = (vo: any) => {
    const item = menus.find((m) => m.key === vo.key);
    if (item && item.path) navigate(item.path);
  };

  const switchMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <section className="menus" style={isShow ? {} : { width: 0 }}>
      <div className={Css.menuContainer}>
        <Menu
          onClick={toPage}
          defaultSelectedKeys={selectKeys}
          style={{ width: "100%" }}
          mode="inline"
          items={menus}
        />
      </div>
      <div className={Css.switchBtn} onClick={switchMenu}>
        {isShow ? (
          <CaretLeftOutlined className={Css.switchIcon} />
        ) : (
          <CaretRightOutlined className={Css.switchIcon} />
        )}
      </div>
    </section>
  );
};

export default BaseMenu;
