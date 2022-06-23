function init(router, Mock) {
  router.post("/login", (req, res) => {
    return res.json(
      Mock.mock({
        message: "success",
        isSuccess: true,
        result: {
          token: "@string",
          userName: "chensy",
          role: "admin",
          permissions: ["PMSystem-profile"],
        },
        code: "00000000",
      })
    );
  });
}

module.exports = exports = init;
