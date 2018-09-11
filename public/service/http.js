
const _url = require("../../public/service/config.js").apiUrl;
const _header = {
  "content-type": "application/json"
};

const http = (url = "", param = {}, type = "GET", header = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url + url,
      data: param,
      header: header,
      method: type,
      success: res => {
        if (res.statusCode == 200) {
          let result = res.data;
          if(result.status == 1){
            resolve(result);
          }else if(result.status == -1){
            let goRestart = wx.getStorageSync("goStart");
            wx.setStorageSync("goStart",false);
            if(goRestart){
              wx.navigateTo({
                url: '../restart/restart'
              })
             
            }
          }else{
            wx.showToast({
              title: result.message?res.data.message:"网络连接失败!",
              icon: 'none'
            });
            reject(res);
          }
        } else {
          wx.showToast({
            title: res.data.message?res.data.message:"网络连接失败!",
            icon: 'none'
          });
          reject(res);
        }
      },
      fail: res => {
        wx.showToast({
          title: "网络连接失败!",
          icon: 'none'
        });
        reject(res);
      },
      complete: res => {
        console.log(_url+url, param, res)
      }
    });
  });
};



const get = (url = "", param = {}) => {
  return http(url, param, "GET", _header);
};

const post = (url = "", param = {}) => {
  let data = Object.assign(param, {
    token: wx.getStorageSync('token')
    // token: "c6e6319ced144322b5d4f2e08e285345"
  });
  return http(url, data, "POST", _header);
  
};
const commonPost = (url = "", param = {}) => {
  return http(url, param, "POST", _header);
};

const update = (url = "", param = {}) => {
  return http(url, param, "PUT", _header);
};

const remove = (url = "", param = {}) => {
  return http(url, param, "DELETE", _header);
};
module.exports = {
  _url,
  get,
  post,
  commonPost,
  update,
  remove
};
