import React from "react";
import useRootStore from "@/store";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import Css from "@/styles/modules/notFound.module.scss";

const NotFound: React.FC = () => {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<INotFoundLT>("notFound");
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={Css.notFound}>
      <h1 className={Css.title}>404</h1>
      <p className={Css.msg}>{texts.message}</p>
      <Button type="primary" onClick={toHome}>
        {texts.backHome}
      </Button>
    </div>
  );
};

export default NotFound;
