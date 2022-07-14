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

export interface AddProjectGroupReq {
  groupName: string;
  remark: string;
}

export const addProjectGroup = (params: AddProjectGroupReq) => {
  return request<Array<ProjectGroupRes>>({
    url: base + "/project/group/add",
    method: "post",
    params,
  });
};

//********** 项目列表
export interface ProjectListRes {
  projectName: string;
  version: string;
  type: number;
  id: string;
}

export interface ProjectListReq extends IPaginationParams {
  projectName?: string;
}

export const postProjectList = (params: ProjectListReq) => {
  return request<IPage<ProjectListRes>>({
    url: base + "/project/list",
    method: "post",
    params,
  });
};
