// pages/grzx/grzx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  quit(){
    wx.showModal({
      title: '确认操作',
      content: '确定要退出吗？',
     
      
      success: function (res) {
         if (res.cancel) {
            //点击取消,默认隐藏弹框
         } else {
            
            
            wx.reLaunch({
              url: '../../pages/login/login'
            })
            wx.showToast({
              title: '退出登录成功！',
              icon:"none"
            })
       
         }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
   })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})