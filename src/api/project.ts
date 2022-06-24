import request from "@/utils/request";
import { EProjetStatus } from "@/utils/enum";

const base = process.env.BASE_URL;

//********** login

export interface ProjectGroupRes {
  id: string;
  groupName: string;
  status: EProjetStatus;
  version: string;
}

export const postProjectGroup = () => {
  return request<Array<ProjectGroupRes>>({
    url: base + "/project/group",
    method: "post",
  });
};
