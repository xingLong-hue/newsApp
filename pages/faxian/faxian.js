// pages/faxian/faxian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemFlag:1
  },
 btn:function(){
   setTimeout(()=>{
     wx.navigateTo({
       url: '/pages/tiyu/tiyu',
     })
   },500);
 },
 changeItemFlag(event){
  console.log(event.currentTarget.dataset.index)
  let index = parseInt(event.currentTarget.dataset.index)
  this.setData({
    itemFlag:index
  })
}
  
})