import React from "react";
import { useAddModal } from "../model";

import { Form, Input } from "antd";
import { Modal } from "antd";

interface IProps {
  texts: IProfileLT;
  show: boolean;
  close: () => void;
  lang: string;
}

const AddModal: React.FC<IProps> = ({ texts, show, close, lang }) => {
  const [form] = Form.useForm();
  const { save, rules, loading } = useAddModal(close, form, texts);
  const { TextArea } = Input;

  return (
    <Modal
      okText={texts.okBtn}
      title={texts.addGroup}
      visible={show}
      onOk={save}
      confirmLoading={loading}
      onCancel={close}
    >
      <Form
        form={form}
        labelCol={lang === "en" ? { span: 6 } : { span: 4 }}
        wrapperCol={lang === "en" ? { span: 18 } : { span: 20 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label={texts.groupName}
          name="groupName"
          rules={rules.groupName}
        >
          <Input />
        </Form.Item>

        <Form.Item label={texts.remark} name="remark">
          <TextArea rows={4} maxLength={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddModal;
