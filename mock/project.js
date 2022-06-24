function project(router, Mock) {
  router.post("/project/group", (req, res) => {
    return res.json(
      Mock.mock({
        message: "success",
        isSuccess: true,
        "result|5-8": [
          {
            id: Mock.Random.natural(10000),

            "groupName|1-3": Mock.Random.cword(
              "业财供应链一体化智慧城市",
              5,
              7
            ),
            "status|1": ["develop", "end", "start", "maintaining"],
            version: Mock.Random.float(0, 10, 1, 3),
          },
        ],
        code: "00000000",
      })
    );
  });
}

module.exports = exports = project;
