const EN: ILocaleText = {
  notFound: {
    message: "The page is not found!",
    backHome: "Back to home",
  },
  home: {
    title: "Better manage your projects !",
  },
  login: {
    title: "Go inside and start managing your project",
    userName: "Please input username or phone",
    password: "Please input password",
    loginBtn: "Login",
    backBtn: "Back to home",
    registerBtn: "Please to register",
    passwordMinLength: "The password length cannot be less than 6 digits",
  },
  profile: {
    groupName: "Project Group",
    start: "Start", // 立项 -- 意味没有定下一个版本之前
    develop: "Develop", // 迭代中 -- 确定版本号，开始开发了
    maintaining: "Maintaining", // 维护中 -- 已有版本开发完，且没有开发下一个版本功能前
    end: "End", // 终止 -- 不再迭代和不再维护
    status: "Status",
    version: "Version",
    addGroup: "Add Project Group",
    okBtn: "Save",
    remark: "Remark",
    groupNameFields: "Please input your group name!",
  },
  HeaderComp: {
    login: "Login",
    logout: "Logout",
  },
  FormAction: {
    success: "Save success !",
  },
};

export default EN;
