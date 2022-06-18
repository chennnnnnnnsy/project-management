import React from "react";
import Css from "./index.module.scss";
import Header from "./children/header";

const Home: React.FC = () => {
  return (
    <div className={Css.home}>
      <Header />
      <main className={Css.main}>
        <h1 className={Css.mainText}>更好地管理您的项目</h1>
      </main>
    </div>
  );
};

export default Home;
