export enum EProjetStatus {
  start = 'start', // 立项 -- 意味没有定下一个版本之前
  develop = 'develop', // 迭代中 -- 确定版本号，开始开发了
  maintaining = 'maintaining', // 维护中 -- 已有版本开发完，且没有开发下一个版本功能前
  end = 'end', // 终止 -- 不再迭代和不再维护
}
