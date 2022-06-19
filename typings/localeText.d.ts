interface LocaleText<T> {
  "zh-cn": T;
  en: T;
}

type LocalePage = 'home' | 'login';

interface HomeLT {
  // LT 是 LocaleText缩写
  login: string;
  title: string;
}
