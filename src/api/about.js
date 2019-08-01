import request from "@/utils/request";
export function newsListApi([
  data = { page: 1, rows: 100, status: 1, type: 5 }
]) {
  return request({
    url: "/sysNews/pageNews",
    method: "post",
    data
  });
}
