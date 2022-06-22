import React from "react";
import I8nStore from "./i8n";
import RouterStore from "./router";

class RootStore {
  i8n: I8nStore;
  router: RouterStore;

  constructor() {
    this.i8n = new I8nStore();
    this.router = new RouterStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useRootStore = () => React.useContext(context);

export default useRootStore;
