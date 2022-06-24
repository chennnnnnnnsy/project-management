function user(router, Mock) {
  router.post("/login", (req, res) => {
    return res.json(
      Mock.mock({
        message: "success",
        isSuccess: true,
        result: {
          token: "@string",
          userName: Mock.Random.cname(),
          role: Mock.Random.last(),
          permissions: ["PMSystem-profile"],
        },
        code: "00000000",
      })
    );
  });
}

module.exports = exports = user;
