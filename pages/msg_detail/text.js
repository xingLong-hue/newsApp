// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:"",
    touxiang:'',
    name:"",
    content:"",
    time:"",
    plun_text:"",
    one_img:"",
    two_img:"",
    three_img:"",
    four_img:"",
    share_img:"",
    plun_img:"",
    like_img:"",
    star:"",
    pen:"",
    toward:"",
    mat:"",
    share_text:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pic = options.pic;
    let touxiang = options.touxiang;
    let name = options.name;
    let content = options.content;
    let time = options.time;
    let plun_text = options.plun_text;
    let one_img = options.one_img;
    let two_img = options.two_img;
    let three_img = options.three_img;
    let four_img = options.four_img;
    let share_img = options.share_img;
    let plun_img = options.plun_img;
    let like_img = options.like_img;
    let pen = options.pen;
    let star = options.star;
    let toward = options.toward;
    let mat = options.mat;
    let share_text = options.share_text;
    console.log(pic);
    this.setData({
      pic:pic,
      touxiang:touxiang,
      name:name,
      content:content,
      time:time,
      plun_text:plun_text,
      one_img:one_img,
      two_img:two_img,
      three_img:three_img,
      four_img:four_img,
      share_img:share_img,
      plun_img:plun_img,
      like_img:like_img,
      pen:pen,
      star:star,
      toward:toward,
      mat:mat,
      share_text:share_text
    })
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