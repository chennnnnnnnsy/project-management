import React from "react";
import Css from "./index.module.scss";

const Home: React.FC = () => {
  return (
    <div className={Css.home}>
      <header className={Css.header}></header>
    </div>
  );
};

export default Home;
