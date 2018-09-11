//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
    },{
      id:"10003",
      type:"5人制",
      address:"上海市合川路2986弄89号",
      price:"40元/人/2小时",
      time:"周日（7-17）20:00",
      info:"长期约球，快乐足球"
    },{
      id:"10004",
      type:"7人制",
      address:"上海市徐汇区交通大学",
      price:"40元/人/2小时",
      time:"周日（7-17）20:00",
      info:"场地费平摊，联系电话1864567892"
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goInitiator:function(){
    wx.navigateTo({
      url: "/pages/initiator/initiator"
    });
  },
  active:function(){
    wx.navigateTo({
      url: "/pages/activityList/activityList"
    });
  }
})
