// pages/videoplayer/videoplayer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:"",
    itemFlag:1,
    isShow:true,
    videoSrc:'https://sucai.suoluomei.cn/sucai_zs/video/20200319110726-bm-video2.mp4',   // 视频
    videoCoverImg:'',   // 视频封面图
    videoPlayIcon:'https://sucai.suoluomei.cn/sucai_zs/images/20200321105958-suspended%403x.png',  // 视频播放icon // 视频播放锁
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pic = options.pic;
    console.log(pic);
    this.setData({
      videoCoverImg:pic
    })
    this.setData({
      onevideo: "https://v.qq.com/x/page/m3256y02npv.html"
    })
  },
  changeItemFlag(event){
    let index = parseInt(event.currentTarget.dataset.index)
    this.setData({
      itemFlag:index
    })
  },
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  
  // 点击封面自定义播放按钮时触发
  bindplay() {
    this.setData({
      isShow:false
    })
    this.videoContext.play()
    console.log('play')
  },
  
  // 监听播放到末尾时触发
  bindended(){
    console.log('bindended')
    this.setData({
      isShow: true
    })
    this.videoContext.ended();
  },
  
  // 监听暂停播放时触发
  bindpause(){
    console.log('pause')
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