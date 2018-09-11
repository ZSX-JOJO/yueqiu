var bmap = require('../../libs/bmap-wx.min.js');
Page({
    data: {
        sugData: []
    },
    bindKeyInput: function(e) {
        var that = this;
        if (e.detail.value === '') {
            that.setData({
                sugData: []
            });
            return;
        }
        var BMap = new bmap.BMapWX({
            ak: '8c1GdeUyNayQHt6pvSDjP0eNY23UIYUe'
        });
        var fail = function(data) {
            console.log(data);
        };
        var success = function(data) {
            that.setData({
                sugData: data.result
            });
        }
        BMap.suggestion({
            query: e.detail.value,
            region: '上海',
            city_limit: true,
            fail: fail,
            success: success
        });
    },
    setAdd:function(e){
        let addName = e.currentTarget.dataset.name;
        wx.setStorageSync('address',addName);
        wx.navigateBack({
            delta: 1
        })
    }
})