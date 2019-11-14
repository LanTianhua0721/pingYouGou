// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null,
    detailAddress: [],
    cartlist: [],
  },
  /**
   * 单个商品的选中
   */
  toggleItem:function(){
    // 获得商品ID
    let goodsId = e.target.dataset.id;
    // 从缓存中获取购物车对象
    let cart = wx.getSt
  },

  /**
   * 添加收获地址
   */
  handleAddress:function(){
    wx.chooseAddress({
      success:(res)=> {
        // 把收货地址写入缓存
        wx.setStorageSync('myAddress', res);
        // 拼接详情地址
        let detailAdd = `${res.provinceName}${res.cityName}${res.countyName}${res.detailInfo}`;
        this.setData({
          address: res,
          detailAddress: detailAdd,
        });
        // 把详情地址写入缓存
        wx.setStorageSync('detailAddress', detailAdd);
      }
    })
  },


  /**
   * 
   */
  readAddress:function(){
    let address = wx.getStorageSync('myAddress');
    let detailAddress = wx.getStorageSync('detailAddress');
    if (address) {
      this.setData({
        address: address,
        detailAddress: detailAddress,
      })
    }
  },
  /**
   *加载商品信息 
   */
  loadCartlist:function(){
    // 从缓存中读取数据
    let cart = wx.getStorageSync('mycart');
    // 把对象转化为数组
    let list = [];
    for (let key in cart) {
      let prod = cart[key];
      list.push(prod);
    }

    //把数组存放到数据区
    this.setData({
      cartlist: list,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载收获地址地址
    this.readAddress();

    // 加载商品信息
    this.loadCartlist();

    
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
    // 加载商品信息
    this.loadCartlist();
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