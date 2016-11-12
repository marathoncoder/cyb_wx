//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World wechat1111',
    userInfo: {},
    imgUrls: [
      'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTItK0O4XWasXQH6AKmtEkKfwUsmrsadkuIhdpicLbYnU0jNW0H4IVko7nqXuTmvDI0SOPJmLCBL9ww/0',
      'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTItK0O4XWasXQH6AKmtEkKfwUsmrsadkuIhdpicLbYnU0jNW0H4IVko7nqXuTmvDI0SOPJmLCBL9ww/0',
      'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTItK0O4XWasXQH6AKmtEkKfwUsmrsadkuIhdpicLbYnU0jNW0H4IVko7nqXuTmvDI0SOPJmLCBL9ww/0'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  }
})
