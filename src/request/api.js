import http from "./http";

async function GetUserInfoApi(params) {
  return await http.get(`api/Authentication/GetUserInfo/`,params);
}

async function UploadImageApi (param) {
  let res = await http.post(`api/controller.ashx?action=uploadimage`, param, false);
  if (res) {
    return res.data;
  }
}


export {
  GetUserInfoApi, //获取用户
  UploadImageApi,//上传图片
};
