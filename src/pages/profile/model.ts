import useRootStore from "@/store";
import { useRequest } from "ahooks";
import { postProjectGroup } from "@/api/project";
import { useModal, useForm } from "@/hooks";
import { addProjectGroup } from "@/api/project";
import { useNavigate } from "react-router-dom";

export const useProfileModel = () => {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<IProfileLT>("profile");
  const lang = i8n.currentLocale;

  const { show, showModal, closeModal } = useModal();

  const { data, loading } = useRequest(postProjectGroup);

  const navigate = useNavigate();
  const toProject = (id: string) => {
    navigate("/project/list?id=" + id);
  };

  return {
    lang,
    texts,
    data: data ? data.result : [],
    loading,
    show,
    closeModal,
    showModal,
    toProject
  };
};

export const useAddModal = (close: any, _form: any, texts: IProfileLT) => {
  const { runAsync, loading } = useRequest(addProjectGroup, { manual: true });

  const { save } = useForm({
    form: _form,
    cbAfterSuccess: close,
    add: runAsync,
  });

  const rules = {
    groupName: [{ required: true, message: texts.groupNameFields }],
  };

  return { save, rules, loading };
};
