// pages/msg/msg.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemFlag:1,
    list:[
      {
        id:1,
        touxiang:"/images/msg_img/QQ.png",
        name:"中国航天",
        jiantou:"/images/msg_img/箭头(1).png",
        time:"2021-07-04",
        score:"评分4分",
        content:"6月17日，中国航天员聂海胜、刘伯明、汤洪波搭乘神舟十二号载人飞船进入太空",
        mat:"据中国载人航天工程办公室消息，7月4日14点57分，经过约7小时的出舱活动，神舟十二号航天员乘组密切协同，圆满完成出舱活动期间全部既定任务，航天员刘伯明、汤洪波安全返回天和核心舱，标志着我国空间站建造阶段航天员首次出舱活动取得圆满成功。",
        img:"/images/msg_img/1000.webp",
        star:"/images/msg_img/star.png",
        pen:"/images/msg_img/pen.png",
        toward:"/images/msg_img/toward.png",
        one_img:"/images/msg_img/m19.jpeg",
        two_img:"/images/msg_img/m50.jpeg",
        three_img:"/images/msg_img/m55.jpeg",
        four_img:"/images/msg_img/m17.jpeg",
        share_img:"/images/msg_img/分享.png",
        like_img:"/images/msg_img/点赞(1).png",
        plun_img:"/images/msg_img/评论.png",
        share_text:"999+",
        plun_text:"999+",
        'praise': 998,
        'hasChange': false
      },
      {
        id:2,
        touxiang:"/images/msg_img/微信.png",
        name:"passion",
        jiantou:"/images/msg_img/箭头(1).png",
        time:"2021-07-03",
        score:"评分4分",
        content:"九州是温泉的故乡，熊本杖立温泉，泡完温泉用会席料理，每个毛孔都在享受的感觉。",
        mat:"九州的别府市面积虽小，地热资源却极其丰富，有“温泉之乡”的美誉。当车子逐渐驶近别府时，远远地就能看到海边山区升起了层层白雾，像乡间傍晚时分的炊烟。据介绍，这是地热现象产生的蒸汽。进入城内，路边到处都能看到升腾的白烟，看来“温泉之乡”真是名不虚传。",
        img:"/images/msg_img/id2.jpg",
        star:"/images/msg_img/star.png",
        pen:"/images/msg_img/pen.png",
        toward:"/images/msg_img/toward.png",
        one_img:"/images/msg_img/m19.jpeg",
        two_img:"/images/msg_img/m50.jpeg",
        three_img:"/images/msg_img/m55.jpeg",
        four_img:"/images/msg_img/m17.jpeg",
        share_img:"/images/msg_img/分享.png",
        like_img:"/images/msg_img/点赞(1).png",
        plun_img:"/images/msg_img/评论.png",
        share_text:"990",
        plun_text:"124",
        'praise': 870,
        'hasChange': false
      },
      {
        id:3,
        touxiang:"/images/msg_img/yuyan.jpg",
        name:"小于",
        jiantou:"/images/msg_img/箭头(1).png",
        time:"2020-07-03",
        score:"评分4分",
        content:"青山隐隐水迢迢，秋尽江南草未凋。二十四桥明月夜，玉人何处教吹箫。",
        mat:"杜牧同学早就说过：秋日的扬州同样是美的。二十四桥的明月夜，更是要在稍有凉意的秋夜看起来才更有意境。当然，我之前几次去扬州，也都是春日，而这一次，偏要看看秋日的扬州究竟是怎样的一番美景。",
        img:"/images/msg_img/id3.jpg",
        star:"/images/msg_img/star.png",
        pen:"/images/msg_img/pen.png",
        toward:"/images/msg_img/toward.png",
        one_img:"/images/msg_img/m19.jpeg",
        two_img:"/images/msg_img/m50.jpeg",
        three_img:"/images/msg_img/m55.jpeg",
        four_img:"/images/msg_img/m17.jpeg",
        share_img:"/images/msg_img/分享.png",
        plun_img:"/images/msg_img/评论.png",
        like_img:"/images/msg_img/点赞(1).png",
        share_text:"778",
        plun_text:"44",
        'praise': 908,
        'hasChange': false
      },
    ]

  },
  praiseThis: function (e) {
    var index = e.currentTarget.dataset.curindex
    if (this.data.list[index]) {
      var hasChange = this.data.list[index].hasChange;
      if (hasChange !== undefined) {
        var onum = this.data.list[index].praise;
        if (hasChange) {
          this.data.list[index].praise = (onum - 1);
          this.data.list[index].hasChange = false;
        } else {
          this.data.list[index].praise = (onum + 1);
          this.data.list[index].hasChange = true;
        }
        this.setData({
          list: this.data.list
        })
      }
    }
  },
  pass(e){
    var index = e.currentTarget.dataset.curindex;
    console.log(index);
    wx.navigateTo({
      url: '/pages/msg_detail/text?pic='+this.data.list[index].img+'&touxiang='+this.data.list[index].touxiang+'&name='+this.data.list[index].name+'&content='+this.data.list[index].content+'&time='+this.data.list[index].time+'&plun_text='+this.data.list[index].plun_text+'&one_img='+this.data.list[index].one_img+'&two_img='+this.data.list[index].two_img+'&three_img='+this.data.list[index].three_img+'&four_img='+this.data.list[index].four_img+'&share_img='+this.data.list[index].share_img+'&plun_img='+this.data.list[index].plun_img+'&like_img='+this.data.list[index].like_img+'&star='+this.data.list[index].star+'&pen='+this.data.list[index].pen+'&toward='+this.data.list[index].toward+'&mat='+this.data.list[index].mat+'&share_text='+this.data.list[index].share_text
    })
  },
change(e){
  var pum = this.data.pum
  var ppp = e.currentTarget.dataset.index
  var ooo = this.data.list[0].like_img
  console.log(ppp)
  if(pum){
    this.setData({
    pum:false
  })}
  else{
    this.setData({
      pum:true
    })
  }
  
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  changeItemFlag(event){
    let index = parseInt(event.currentTarget.dataset.index)
    this.setData({
      itemFlag:index
    })
  },
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