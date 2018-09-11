Page({
  data:{
    date: '2018-09-01',
    time: '18:00',
    index: '4',
    address:"",
    typeArr: ["3人制","4人制","5人制","6人制","7人制","8人制","9人制","10人制","11人制"],
    priceArr: ["不收钱","10元/人","20元/人","30元/人","40元/人","50元/人","60元/人","70元/人","80元/人","90元/人","100元/人"]
  },
  onLoad:function(){
    let date = this.formatShortDate();
    this.setData({
      date:date
    });
  },
  onShow:function(){
    let addName = wx.getStorageSync('address');
    this.setData({
      address:addName
    });
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindPriceChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindNumChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  search: function() {
    wx.navigateTo({
      url: '../suggestion/suggestion'
    })
  },
  formatShortDate:function(){
    const date = new Date();
    const year = date.getFullYear();
    const month = ((date.getMonth() + 1)>9)?(date.getMonth() + 1):("0"+(date.getMonth() + 1));
    const day = (date.getDate()>9)?date.getDate():("0"+date.getDate());
    return [year, month, day].join('-');
  }
})