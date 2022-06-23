import React from "react";
import I8nStore from "./i8n";
import UserStore from "./user";

class RootStore {
  i8n: I8nStore;
  user: UserStore;

  constructor() {
    this.i8n = new I8nStore();
    this.user = new UserStore();
  }
}

const rootStore = new RootStore();
const context = React.createContext(rootStore);
const useRootStore = () => React.useContext(context);

export default useRootStore;
