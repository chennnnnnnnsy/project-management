import React from "react";
import Header from "@/components/Header";

import Css from "@/styles/modules/BaseLayoutComp.module.scss";

const BaseLauyout: React.FC<any> = ({ children }) => {
  return (
    <div className={Css.container}>
      <Header />
      {children}
    </div>
  );
};

export default BaseLauyout;
