// pages/goods-detail/index.js
import ZhenxinRequest from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsId: '',
    info: null
  },

  /**
   * 立即购买
   */
  toBuy: function () {
    //执行一次 “加入购物车”
    this.handleAddCart();
    //跳转到购物车页面
    wx.switchTab({
      url: '/pages/cart/index',
    })
  },

  /**
   * 加入购物车
   */
  handleAddCart: function () {
    //添加购物车: 把商品信息加入本地缓存
    //首次 从本地缓存中查询数据，如果没有找到
    let cart = wx.getStorageSync("mycart") || {};

    //把当前的商品信息写入指定对象 key value code
    cart[this.data.info.goods_id] = this.data.info;

    // 设置默认选中的属性和数量
    cart[this.data.info.goods_id].checked = false;
    cart[this.data.info.goods_id].num = 1;

    //把数据对象写回缓存
    wx.setStorageSync('mycart', cart);

    //加入后提醒成功
    wx.showToast({
      title: '添加成功',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      goodsId: options.goods_id,
    });
    //根据商品ID获得相应的数据
    ZhenxinRequest('goods/detail', { goods_id: this.data.goodsId }).then(res => {
      console.log(res.data.message);
      //更新检索结果：保存商品的信息n                                                                                         
      this.setData({
        info: res.data.message
      });
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