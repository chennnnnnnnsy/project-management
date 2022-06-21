import { login } from "@/api";
import { useRequest } from "ahooks";

const useLoginModel = () => {
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
      }
      console.log(res)
    });
  };

  return { toLogin, loading };
};

export default useLoginModel;
