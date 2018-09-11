const v = "1.0";
const appId = "wxbf5bad69067ec3d5";
let env = "test"; //环境变量
let config = {};
if(env==="prod"){
    config = {
        imgUrl: "https://card-test.dushu.io/miniPro/img/",
        apiUrl: "",
        gioId: "",
        version: v,
        appId: appId
    }   
}else if(env==="test"){
    config = {
        imgUrl: "https://card-test.dushu.io/miniPro/img/",
        apiUrl: "",
        gioId: "",
        version: v,
        appId: appId
    }
}

module.exports = config;