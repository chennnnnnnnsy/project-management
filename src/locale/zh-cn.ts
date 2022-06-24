const notFound: INotFoundLT = {
  message: "没有找到该页面！",
  backHome: "返回首页",
};
const home: IHomeLT = {
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
const HeaderComp: IHeaderCompLT = {
  login: "登录",
  logout: "退出登录",
};
const profile: IProfileLT = {
  groupName: "项目组",
  start: "立项", // 立项 -- 意味没有定下一个版本之前
  develop: "迭代中", // 迭代中 -- 确定版本号，开始开发了
  maintaining: "维护中", // 维护中 -- 已有版本开发完，且没有开发下一个版本功能前
  end: "终止", // 终止 -- 不再迭代和不再维护

  status: "状态",
  version: '版本号'
};
const ZhCN: ILocaleText = {
  notFound,
  home,
  login,
  HeaderComp,
  profile,
};

export default ZhCN;
