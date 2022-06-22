const notFound: INotFoundLT = {
  message: "The page is not found!",
};
const home: IHomeLT = {
  login: "Login",
  title: "Better manage your projects !",
};
const login: ILoginLT = {
  title: "Go inside and start managing your project",
  userName: "Please input username or phone",
  password: "Please input password",
  loginBtn: "Login",
  backBtn: "Back to home",
  registerBtn: "Please to register",
  passwordMinLength: "The password length cannot be less than 6 digits",
};

const EN: ILocaleText = {
  notFound,
  home,
  login,
};

export default EN;
