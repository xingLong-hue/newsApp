// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    colorFlag:0,
    username:"123",
    password:"123",
    loginUsername:"",
    loginPwd:"",
    suUsername:"",
    suPwd:"",
    suPwd2:"",
    suFlag1:0,
    suFlag2:0,
    suFlag3:0
  },
  onLoad: function (options) {

  },
  changeFlag(event){
    this.setData({
      colorFlag:parseInt(event.currentTarget.dataset.index)
    })
  },
  
  getSuUsername(event){
    this.setData({
      suUsername:event.detail.value
    })
  },
  getSuPwd(event){
    this.setData({
      suPwd:event.detail.value
    })
    console.log(this.data.suPwd)
  },
  getSuPwd2(event){
    this.setData({
      suPwd2:event.detail.value
    })
  },
  checkSuUsername(){
    if(this.data.suUsername == ""){
      wx.showToast({
        title: '账号不能为空',
        icon:"none"
      })
    }else if(this.data.suUsername.length > 10 || this.data.suUsername.length < 6){
      wx.showToast({
        title: '账号长度在6-10之间',
        icon:"none"
      })
      this.setData({
        suUsername:"",
        suFlag1:0
      })
    }else{
      this.setData({
        suFlag1:1
      })
    }
  },
  checkSuPwd(){
    if(this.data.suPwd == ""){
      wx.showToast({
        title: '密码不能为空',
        icon:"none"
      })
    }else if(this.data.suPwd.length > 10 || this.data.suPwd.length <6){
      wx.showToast({
        title: '密码长度在6-10之间',
        icon:"none"
      })
      this.setData({
        suPwd:"",
        suFlag2:0
      })
    }else{
      this.setData({
        suFlag2:1
      })
    }
  },
  checkSuPwd2(){
    if(this.data.suPwd2 == ""){
      wx.showToast({
        title: '再次输入密码不能为空',
        icon:"none"
      })
    }else if(this.data.suPwd != this.data.suPwd2){
      wx.showToast({
        title: '两次密码不一致',
        icon:"none"
      })
      this.setData({
        suPwd2:"",
        suFlag3:0
      })
    }else{
      this.setData({
        suFlag3:1
      })
    }
  },
  getLoUsername(event){
    this.setData({
      loginUsername:event.detail.value
    })
   
  },
  getLoPwd(event){
    this.setData({
      loginPwd:event.detail.value
    })
    console.log(this.data.loginPwd)
  },
  zhuce(){
    if(this.data.suFlag1 == 1 && this.data.suFlag2 == 1 && this.data.suFlag3 == 1){
      this.setData({
        username:this.data.suUsername,
        password:this.data.suPwd,
        colorFlag:0,
        suUsername:"",
        suPwd:"",
        suPwd2:""
      })
      wx.showToast({
        title: '注册成功！',
        icon:"none"
      })
    }
  },
  login(){
    if(this.data.loginUsername == this.data.username && this.data.loginPwd == this.data.password){
      wx.showToast({
        title: '登录成功！正在跳转...',
        icon:"none"
      })
      setTimeout(() => {
        wx.switchTab({
          url: '../../pages/shouye/shouye',
        })
      }, 1000);
      
    }
  }
})