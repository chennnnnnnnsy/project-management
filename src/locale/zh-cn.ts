const notFound: INotFoundLT = {
  message: "没有找到该页面！",
};
const home: IHomeLT = {
  login: "登录",
  title: "更好地管理您的项目！",
};
const login: ILoginLT = {
  title: "从此进入，开始管理您的项目",
  userName: "请输入用户名/手机号码",
  password: "请输入密码",
  loginBtn: "登录",
  backBtn: "返回首页",
  registerBtn: "先去注册",
  passwordMinLength: "密码长度不能小于6位",
};

const ZhCN: ILocaleText = {
  notFound,
  home,
  login,
};

export default ZhCN;
