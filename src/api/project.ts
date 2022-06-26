import request from "@/utils/request";
import { EProjetStatus } from "@/utils/enum";

const base = process.env.BASE_URL;

//********** 项目组列表查询

export interface ProjectGroupRes {
  id: string;
  groupName: string;
  status: EProjetStatus;
  version: string;
}

export const postProjectGroup = () => {
  return request<Array<ProjectGroupRes>>({
    url: base + "/project/group/list",
    method: "post",
  });
};

//********** 新增项目组

interface AddProjectGroupReq {
  groupName: string;
  remark: string;
}

export const addProjectGroup = (params: AddProjectGroupReq) => {
  return request<Array<ProjectGroupRes>>({
    url: base + "/project/group/add",
    method: "post",
    params
  });
};
