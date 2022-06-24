import React from "react";
import useHeaderCompModel from "./model";

import { Button } from "antd";
import { Dropdown, Menu } from "antd";

import Css from "@/styles/modules/HeaderComp.module.scss";

const Header: React.FC = () => {
  const { user, toPage, texts, i8n, drownMenu, menuClick } =
    useHeaderCompModel();

  return (
    <header className="header">
      <section className={Css.title}>{process.env.SYSTEM_NAME}</section>
      <section>
        <Button onClick={() => i8n.changeLocale()} className={Css.switchBtn}>
          {i8n.nextLocaleText}
        </Button>
        {user.userName ? (
          <Dropdown
            placement="bottomLeft"
            overlay={<Menu onClick={menuClick} items={drownMenu} />}
          >
            <span>
              <i className={Css.username}>{user.userName}</i>
            </span>
          </Dropdown>
        ) : (
          <Button type="primary" onClick={toPage}>
            {texts.login}
          </Button>
        )}
      </section>
    </header>
  );
};

export default Header;
