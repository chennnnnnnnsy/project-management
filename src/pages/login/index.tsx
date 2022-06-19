import React from "react";
import Css from "./index.module.scss";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("form", values);
  };

  const rules = {
    userName: [{ required: true, message: "请输入用户名/手机号码" }],
    password: [{ required: true, message: "请输入密码" }],
  };

  const toPage = () => {
    navigate("/", { replace: true });
  };

  const toRegister = () => {
      window.alert('暂时未开放注册哦！')
    }

  return (
    <main className={Css.login}>
      <section className={Css.left}></section>
      <section className={Css.right}>
        <div className={Css.form}>
          <p className={Css.title}>从此进入，开始管理您的项目</p>
          <Form name="normal_login" onFinish={onFinish}>
            <Form.Item name="userName" rules={rules.userName}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名/手机号码"
              />
            </Form.Item>
            <Form.Item name="password" rules={rules.password}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Button className={Css.formBtn} type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
          <div className="line" />
          <div className={Css.other}>
            <div className={Css.backBtn} onClick={toPage}>
              返回首页
            </div>
            <div className={Css.registerBtn} onClick={toRegister}>先去注册</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
