// components/wenda/wenda.js
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
    itemFlag1:7
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItemFlag1(e){
      console.log(e.currentTarget.dataset.index)
      let index1 = parseInt(e.currentTarget.dataset.index)
      this.setData({
        itemFlag1:index1
      })
    }
  }
})
