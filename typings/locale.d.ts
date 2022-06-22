// LT 是 LocaleText缩写

interface IHomeLT {
  login: string;
  title: string;
}

interface ILoginLT {
  title: string;
  userName: string;
  password: string;
  loginBtn: string;
  backBtn: string;
  registerBtn: string;
  passwordMinLength: string;
}

interface INotFoundLT {
  message: string;
}

interface ILocaleText {
  home: IHomeLT;
  login: ILoginLT;
  notFound: INotFoundLT;
}
