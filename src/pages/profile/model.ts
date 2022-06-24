import useRootStore from "@/store";
import { useRequest } from "ahooks";
import { postProjectGroup } from "@/api/project";

function useProfileModel() {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<IProfileLT>("profile");

  const { data, loading } = useRequest(postProjectGroup);

  return { texts, data: data ? data.result : [], loading };
}

export default useProfileModel;
