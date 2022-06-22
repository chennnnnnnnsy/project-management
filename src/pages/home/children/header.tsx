import React from "react";
import useRootStore from "@/store";
import { useNavigate } from "react-router-dom";

import { Button } from "antd";

import Css from "@/styles/modules/home.module.scss";

interface HeaderProps {
  texts: IHomeLT;
}

const Header: React.FC<HeaderProps> = ({ texts }) => {
  const { i8n } = useRootStore();
  const navigate = useNavigate();

  const toPage = () => {
    navigate("/login");
  };

  return (
    <header className={`header ${Css.header}`}>
      <section className={Css.title}>{process.env.SYSTEM_NAME}</section>
      <section>
        <Button onClick={() => i8n.changeLocale()} className={Css.switchBtn}>
          {i8n.nextLocaleText}
        </Button>
        <Button type="primary" onClick={toPage}>
          {texts.login}
        </Button>
      </section>
    </header>
  );
};

export default Header;
