import { makeObservable, observable, computed, action } from "mobx";
import { changeLocaleByDayjs } from "@/utils/dayjs";

import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";

import localeEN from "@/locale/en";
import localeZhCN from "@/locale/zh-cn";

class I8nStore {
  currentLocale: "zh-cn" | "en" = "zh-cn";

  localeTexts: { [s: string]: ILocaleText } = {
    "zh-cn": localeZhCN,
    en: localeEN,
  };

  constructor() {
    makeObservable(this, {
      localeTexts: observable,
      currentLocale: observable,
      changeLocale: action,
      antdLocale: computed,
      nextLocaleText: computed,
    });
  }

  get antdLocale() {
    return this.currentLocale === "en" ? enUS : zhCN;
  }

  get nextLocaleText() {
    return this.currentLocale === "en" ? "中文" : "English";
  }

  changeLocale() {
    const locale = this.currentLocale === "en" ? "zh-cn" : "en";
    changeLocaleByDayjs(locale);
    this.currentLocale = locale;
  }

  getLocaleTexts<T>(pageName: TPageName): T {
    const lt: any = this.localeTexts[this.currentLocale];
    const texts: T = lt[pageName];
    return texts;
  }
}

export default I8nStore;
