interface LocaleText<T> {
  "zh-cn": T;
  en: T;
}

type LocalePage = "home" | "login";

interface HomeLT {
  // LT 是 LocaleText缩写
  login: string;
  title: string;
}

interface LoginLT {
  title: string;
  userName: string;
  password: string;
  loginBtn: string;
  backBtn: string;
  registerBtn: string;
  passwordMinLength: string;
}
