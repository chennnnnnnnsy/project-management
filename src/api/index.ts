import request from "@/utils/request";

const base = process.env.BASE_URL;

//********** login
interface LoginReq {
  userName: string;
  password: string;
}
interface LoginRes {
  token: string;
  userName: string;
  role: string;
  permissions: Array<string>;
}

export const login = (params: LoginReq) => {
  return request<LoginRes>({
    url: base + "/login",
    method: "post",
    params,
  });
};
