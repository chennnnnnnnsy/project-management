import React from "react";
import useLoginStore from "./model";

import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import Css from "@/styles/modules/login.module.scss";

const Login: React.FC = () => {
  const { texts, toLogin, rules, toPage, toRegister, loading } =
    useLoginStore();

  return (
    <main className={Css.login}>
      <section className={Css.left}></section>
      <section className={Css.right}>
        <div className={Css.form}>
          <p className={Css.title}>{texts.title}</p>
          <Form name="normal_login" onFinish={toLogin}>
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
                loading={loading}
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
