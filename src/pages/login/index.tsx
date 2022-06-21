import React from "react";
import Css from "./index.module.scss";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import useRootStore from "@/store";
import useLoginStore from "./model";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const loginStore = useLoginStore();

  const { i8n } = useRootStore();
  const texts = i8n.getLocaleTexts<LoginLT>("login");

  const rules = {
    userName: [{ required: true, message: texts.userName }],
    password: [
      { required: true, message: texts.password },
      { min: 6, message: texts.passwordMinLength },
    ],
  };

  const toPage = () => {
    navigate("/", { replace: true });
  };

  const toRegister = () => {
    window.alert("暂时未开放注册哦！");
  };

  return (
    <main className={Css.login}>
      <section className={Css.left}></section>
      <section className={Css.right}>
        <div className={Css.form}>
          <p className={Css.title}>{texts.title}</p>
          <Form name="normal_login" onFinish={loginStore.toLogin}>
            <Form.Item name="userName" rules={rules.userName}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={texts.userName}
              />
            </Form.Item>
            <Form.Item name="password" rules={rules.password}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={texts.password}
              />
            </Form.Item>
            <Form.Item>
              <Button
                loading={loginStore.loading}
                className={Css.formBtn}
                type="primary"
                htmlType="submit"
              >
                {texts.loginBtn}
              </Button>
            </Form.Item>
          </Form>
          <div className="line" />
          <div className={Css.other}>
            <div className={Css.backBtn} onClick={toPage}>
              {texts.backBtn}
            </div>
            <div className={Css.registerBtn} onClick={toRegister}>
              {texts.registerBtn}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
