import { login } from "@/api";
import { useRequest } from "ahooks";
import useRootStore from "@/store";
import { useNavigate } from "react-router-dom";

const useLoginModel = () => {
  // 跳转
  const navigate = useNavigate();
  const toPage = () => {
    navigate("/", { replace: true });
  };

  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<ILoginLT>("login");

  // form rules
  const rules = {
    userName: [{ required: true, message: texts.userName }],
    password: [
      { required: true, message: texts.password },
      { min: 6, message: texts.passwordMinLength },
    ],
  };

  // login请求
  const { runAsync, loading } = useRequest(login, { manual: true });
  const toLogin = (params: any) => {
    runAsync(params).then((res) => {
      if (res.isSuccess) {
        sessionStorage.setItem("pm-token", res.result.token);
        sessionStorage.setItem(
          "pm-user",
          JSON.stringify({
            userName: res.result.userName,
            role: res.result.role,
          })
        );

        navigate("/profile", { replace: true });
      }
    });
  };

  // 跳转到注册页面
  const toRegister = () => {
    window.alert("暂时未开放注册哦！");
  };

  return { toLogin, loading, toPage, toRegister, rules, texts };
};

export default useLoginModel;
