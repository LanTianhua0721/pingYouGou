// components/tabs/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabData:{
      type:Array,
      value:[],
    },
    currentIndex:{
      type:Number,
      value:0,
     },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 选项卡点击事件
    handleChange: function (e) {
      // console.log('内部点击');
      // 保存当前currentIndex
      this.setData({
        currentIndex: e.target.dataset.index,
      });
      // 触发外部自定义事件（组件之间的通信）
      this.triggerEvent('zxtap', e.target.dataset.index)
    },
  }
})
