import useRootStore from "@/store";
import { useRequest } from "ahooks";
import { postProjectGroup } from "@/api/project";
import { useState, useCallback } from "react";

export const useProfileModel = () => {
  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<IProfileLT>("profile");

  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow(false);
  };
  const showModal = () => {
    setShow(true);
  };

  const { data, loading } = useRequest(postProjectGroup);

  return {
    texts,
    data: data ? data.result : [],
    loading,
    show,
    closeModal,
    showModal,
  };
};

export const useAddModal = (close: any) => {
  const save = () => {
    close();
  };

  return { save };
};
