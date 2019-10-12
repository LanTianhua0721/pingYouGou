// home/index.js

//调用
import ZhenxinRequest from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData:[],
    catiData:[],
    autoplay: true,
    duration: 2000,
    interval: 3000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // //调用轮播器的接口数据
    // wx.request({
    //   url: 'https://www.ehomespace.com/api/public/v1/home/swiperdata',
    //   success:(res) => {
    //     console.log(res.data.message);

    //     this.setData({
    //       swiperData: res.data.message
    //     })
    //   }
    // })

  //   // 调用分类接口数据
  //   wx.request({
  //     url: 'https://www.ehomespace.com/api/public/v1/home/catitems',
  //     success: (res) => {
  //       console.log(res.data.message);

  //       this.setData({
  //         catiData: res.data.message
  //       })
  //     }
  //   })

    ZhenxinRequest('home/swiperdata').then(res=>{
      console.log(res.data.message);
      this .setData({
        swiperData: res.data.message
      })
    })

    ZhenxinRequest('home/catitems').then(res => {
      console.log(res.data.message);
      this.setData({
        catiData: res.data.message
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