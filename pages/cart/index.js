// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null,
    detailAddress: [],
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载地址
    let address = wx.getStorageSync('myAddress');
    let detailAddress = wx.getStorageSync('detailAddress');
    if(address){
      this.setData({
        adddress: address,
        detailAddress: detailAddress,
      })
    }
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