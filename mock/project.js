function project(router, Mock) {
  router.post("/project/group/list", (req, res) => {
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
            version: Mock.Random.float(0, 10, 1, 2),
          },
        ],
        code: "00000000",
      })
    );
  });

  router.post("/project/group/add", (req, res) => {
    return res.json(
      Mock.mock({
        message: "success",
        isSuccess: true,
        result: true,
        code: "00000000",
      })
    );
  });

  router.post("/project/list", (req, res) => {
    return res.json(
      Mock.mock({
        code: "00000000",
        message: "success",
        isSuccess: true,
        result: {
          "content|4-7": [
            {
              "id|3-89": 12,
              "projectName|1-3": Mock.Random.cword(
                "业财供应链一体化智慧城市",
                5,
                7
              ),
              version: Mock.Random.float(0, 10, 1, 2),
              type: Mock.Random.integer(0, 1),
            },
          ],
          current: 1, //(integer, optional);
          pageSize: 10,
          total: 100, //(integer, optional);
        },
      })
    );
  });
}

module.exports = exports = project;
