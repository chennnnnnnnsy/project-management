import request from "@/utils/request";

const base = process.env.BASE_URL;

//********** login
interface LoginParams {
  userName: string;
  password: string;
}

export const login = (params: LoginParams) => {
  return request<string>({
    url: base + "/login",
    method: "post",
    params,
  });
};
