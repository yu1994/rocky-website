import request from "@/utils/request";

// export function talentsTypeApi(data) {
//   return request({
//     url: '/postClassification/findAllPostClassification',
//     method: 'post',
//     params:data
//   });
// }
export function talentsListApi(data) {
  return request({
    url: "/sysPost/findAllPost",
    method: "post",
    data
  });
}
