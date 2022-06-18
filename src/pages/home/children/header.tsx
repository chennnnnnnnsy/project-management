import React from "react";
import Css from "../index.module.scss";
import { Button } from "antd";
import useRootStore from "@/store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
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
          登录
        </Button>
      </section>
    </header>
  );
};

export default observer(Header);
