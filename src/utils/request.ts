import axios from "axios";
import { message, notification } from "antd";

const resultCode = ["00000000", "200", 200];

const errMessage = "服务器君开小差了，请稍后再试";

axios.defaults.timeout = 15000;

axios.interceptors.request.use(
  (config: any) => {
    config.headers["X-Token"] = sessionStorage.getItem("pm-token");
    if (!config.method || config.method.toLowerCase() === "get") {
      config.headers["Cache-Control"] = "no-store";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    message.error(
      error.response.status + "： " + (error.response.message || errMessage)
    );
    return Promise.reject(new Error(error));
  }
);

const request = async <T>({
  url = "",
  params = {},
  headers = {},
  method = "post",
}: IRequestOpt): Promise<IResponseSuccessData<T>> => {
  const isGet = ["get", "head", "delete"].includes(method.toLocaleLowerCase());

  return axios({
    method,
    [isGet ? "params" : "data"]: params,
    url,
    headers: headers,
  })
    .then(({ data = {} }: any) => {
      const { code, message } = data,
        isMatchCode = resultCode.includes(code),
        _msg = message || errMessage;
      // 如果是code=18999996则跳转到登录页面
      if (data && data.code === "18999996") {
        notification.error({
          message: "登录超时",
          description: "登录超时，请重新登录！",
        });

        // TODO: 这里还要做登出处理
      } else if (data && data instanceof Blob) {
        // 文件流数据
        return { data };
      }
      return {
        ...data,
        message: _msg,
        isSuccess: isMatchCode,
      };
    })
    .catch((error) => {
      return error;
    });
};

export default request;
