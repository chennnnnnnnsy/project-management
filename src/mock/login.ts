import Mock from "mockjs";

const base = process.env.BASE_URL;

const init = () => {
  Mock.mock(base + "/login", "post", {
    message: "success",
    isSuccess: true,
    result: "123",
    code: 0,
  });

  console.info("login mock init");
};

export default init;
