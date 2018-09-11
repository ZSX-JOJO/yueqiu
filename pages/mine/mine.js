const imgUrl = require("../../public/service/config.js").imgUrl;
Page({
  data:{
    imgUrl: imgUrl,
    isLogin:false,
    pay1:"pay1",
    pay2:"pay2",
    girlImg:"../../public/images/girl.png",
    boyImg:"../../public/images/man.png",
    userInfo:{
      userHeader:"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erNlj6c3pDEOmt27E6atibXsOIMggDWNKLOu6uSOiatDbibKE9eENnRCBVUFfqia1kUYrNpLpaT25D6uQ/132",
      username:"赵健",
      sex:"1",
      site:"LWF"
    },
    noheadUrl:imgUrl+"head.png",
    list:[{
      id:"10001",
      type:"7人制",
      address:"上海市合川路2986弄89号",
      price:"40元/人/2小时",
      time:"周日（7-17）20:00",
      num:"差3人",
      info:"长期约球，快乐足球"
    },{
      id:"10002",
      type:"8人制",
      address:"上海市长宁区工程技术大学",
      price:"场地费平摊",
      time:"周六（7-14）18:00",
      info:"长期约球，快乐足球"
    }]
  }
  
})