// LT 是 LocaleText缩写

interface IHomeLT {
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
  backHome: string;
}

interface IHeaderCompLT {
  // 公共组件要加 Comp
  login: string;
  logout: string;
}

interface IProfileLT {
  groupName: string;
  start: string;
  develop: string;
  maintaining: string;
  end: string;
  version: string;
  status: string;
}

interface ILocaleText {
  home: IHomeLT;
  login: ILoginLT;
  notFound: INotFoundLT;
  profile: IProfileLT;
  HeaderComp: IHeaderCompLT;
}
