import React from "react";
import { useAddModal } from "../model";

import { Modal } from "antd";

interface IProps {
  texts: IProfileLT;
  show: boolean;
  close: () => void;
}

const AddModal: React.FC<IProps> = ({ texts, show, close }) => {
  const { save } = useAddModal(close);
  console.log(12);
  return (
    <Modal okText={texts.okBtn} title={texts.addGroup} visible={show} onOk={save} onCancel={close}>
    
    </Modal>
  );
};

export default AddModal;
