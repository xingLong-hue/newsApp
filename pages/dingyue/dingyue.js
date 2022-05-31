// pages/dingyue/dingyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemFlag:1,
    itemFlag1:7

  },
  changeItemFlag(event){
    console.log(event.currentTarget.dataset.index)
    let index = parseInt(event.currentTarget.dataset.index)
    this.setData({
      itemFlag:index
    })
  },
  changeItemFlag1(e){
    console.log(e.currentTarget.dataset.index)
    let index1 = parseInt(e.currentTarget.dataset.index)
    this.setData({
      itemFlag1:index1
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