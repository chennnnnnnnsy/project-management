function init(router, Mock) {
  router.post("/login", (req, res) => {
    return res.json(
      Mock.mock({
        message: "success",
        isSuccess: true,
        result: "123",
        code: 0,
      })
    );
  });
}

module.exports = exports = init;
