// components/header1/header1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    itemFlag:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItemFlag(event){
      let index = parseInt(event.currentTarget.dataset.index)
      this.setData({
        itemFlag:index
      })
    }  
  }
})
