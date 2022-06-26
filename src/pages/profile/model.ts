import useRootStore from "@/store";
import { useRequest } from "ahooks";
import { postProjectGroup } from "@/api/project";
import { useModal, useForm } from "@/hooks";
import { addProjectGroup } from "@/api/project";

export const useProfileModel = () => {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<IProfileLT>("profile");
  const lang = i8n.currentLocale;

  const { show, showModal, closeModal } = useModal();

  const { data, loading } = useRequest(postProjectGroup);

  return {
    lang,
    texts,
    data: data ? data.result : [],
    loading,
    show,
    closeModal,
    showModal,
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
