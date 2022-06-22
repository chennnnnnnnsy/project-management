import React from "react";
import useRootStore from "@/store";

import Css from "@/styles/modules/notFound.module.scss";

const Page404: React.FC = () => {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<INotFoundLT>("notFound");

  return (
    <div className={Css.notFound}>
      <h1 className={Css.title}>404</h1>
      <p className={Css.msg}>{texts.message}</p>
    </div>
  );
};

export default Page404;
