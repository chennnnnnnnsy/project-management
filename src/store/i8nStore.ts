import { makeObservable, observable, computed, action } from "mobx";
import { changeLocaleByDayjs } from "@/utils/dayjs";

import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";

class I8nStore {
  currentLocale: "zh-cn" | "en" = "zh-cn";

  constructor() {
    makeObservable(this, {
      currentLocale: observable,
      changeLocale: action,
      antdLocale: computed,
    });
  }

  get antdLocale() {
    return this.currentLocale === "en" ? enUS : zhCN;
  }

  changeLocale() {
    const locale = this.currentLocale === "en" ? "zh-cn" : "en";
    changeLocaleByDayjs(locale);
    this.currentLocale = locale === "en" ? "en" : "zh-cn";
  }
}


export default I8nStore;
