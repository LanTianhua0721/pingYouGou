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
   * 加入购物车
   */
  handleAddCart:function(){
    // 添加到购物车 把商品信息加入本地缓存
    // 首次 从本地缓存中查询数据 如果没找到 则创建空对象
    let cart = wx.getStorageSync('mycart') || {};
    // 把当前的商品信息写入指定对象
    cart[this.data.goods_id] = this.data.info;

    // 把数据对象写会缓存
    wx.getStorageSync('mycart', cart);

    // 加入后提示成功
    wx.showToast({
      title: '添加成功',
    })
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
   * 立即购买
   */
  toBuy:function(){
    // 执行一次加“入购物车”
    this.handleAddCart();
    // 跳转到购物车页面
    wx.switchTab({
      url: '/pages/cart/index',
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