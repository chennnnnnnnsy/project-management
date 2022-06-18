import EN from "dayjs/locale/en";
import zhCN from "dayjs/locale/zh-cn";

import dayjs from "dayjs";

const changeLocaleByDayjs = (type: "zh-cn" | "en") => {
  const locale: ILocale = type === "en" ? EN : zhCN;
  dayjs.locale(locale);
};

changeLocaleByDayjs("zh-cn"); // 初始化用中文

export default dayjs;
export { changeLocaleByDayjs };
