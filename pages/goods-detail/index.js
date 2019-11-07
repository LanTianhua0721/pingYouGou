// pages/goods-detail/index.js
//调用
import ZhenxinRequest from '../../utils/request.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsId: '',
    info: null,
    autoplay: true,
    duration: 2000,
    interval: 3000,
    topFlag: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 打印参数
    console.log(options);
    ZhenxinRequest('goods/detail', { goods_id: options.goods_id }).then(res => {
      // 打印数据
      console.log(res.data.message);
      // 保存获取的数据
      this.setData({
        info: res.data.message,
      })
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