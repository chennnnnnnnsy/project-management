import React from "react";
import I8nStore from "./i8n";

class RootStore {
  i8n: I8nStore;

  constructor() {
    this.i8n = new I8nStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useRootStore = () => React.useContext(context);

export default useRootStore;
