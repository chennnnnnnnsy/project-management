import React from "react";
import useRootStore from "@/store";

import Header from "@/components/Header";

import Css from "@/styles/modules/home.module.scss";

const Home: React.FC = () => {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<IHomeLT>("home");

  return (
    <div className={Css.home}>
      <Header />
      <main className={Css.main}>
        <h1 className={Css.mainText}>{texts.title}</h1>
      </main>
    </div>
  );
};

export default Home;
