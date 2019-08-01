import request from "@/utils/request";
export function newsListApi(data) {
  return request({
    url: "/sysNews/pageNews",
    method: "post",
    data
  });
}
export function financeAPI(data) {
  return request({
    url: "/sysInvestor/pageInvestor",
    method: "post",
    data
  });
}
/** 分析师 表格 */
export function analyzeApi() {
  return request({
    url: "/sysAnalyst/findAllAnalyst",
    method: "post"
  });
}
