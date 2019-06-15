import request from "@/utils/request";

export function newsListApi(data) {
  return request({
    url: "/sysNews/pageNews",
    method: "post",
    data
  });
}
export function newsDetailApi(id) {
  return request({
    url: "/sysNews/selectOneNewsById",
    method: "post",
    data: {
      id
    }
  });
}
