import React from "react";
import Css from "../index.module.scss";
import { Button } from "antd";

const Header: React.FC = () => {
  return (
    <header className={Css.header}>
      <div>PM System</div>
      <Button type="primary">登陆</Button>
    </header>
  );
};

export default Header;
