import React from "react";
import Css from "./index.module.scss";
import Header from "./children/header";
import useRootStore from "@/store";

const Home: React.FC = () => {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<HomeLT>("home");

  return (
    <div className={Css.home}>
      <Header texts={texts} />
      <main className={Css.main}>
        <h1 className={Css.mainText}>{texts.title}</h1>
      </main>
    </div>
  );
};

export default Home;
