// components/zazhi/zazhi.js
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
            banner: ["../../zazhi_img/background1.jpg", "../../zazhi_img/background2.jpg", "../../zazhi_img/background3.jpg","../../zazhi_img/background4.jpg"],
        
        xindex: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange: function (e) {
            this.setData({
              xindex: e.detail.current
            });
          },
    }
})
