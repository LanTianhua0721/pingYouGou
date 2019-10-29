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
    floorData:[],
    autoplay: true,
    duration: 2000,
    interval: 3000,
    topFlag: true,
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

    // ZhenxinRequest('home/swiperdata').then(res=>{
    //   // 打印数据
    //   //console.log(res.data.message);
      
    //   this .setData({
    //     swiperData: res.data.message
    //   })
    // })

    // ZhenxinRequest('home/catitems').then(res => {
    //   // 打印数据
    //   //console.log(res.data.message);

    //   this.setData({
    //     catiData: res.data.message
    //   })
    // })

    // ZhenxinRequest('home/floordata').then(res => {
    //   // 打印数据
    //   //console.log(res.data.message);

    //   this.setData({
    //     floorData: res.data.message
    //   })
    // })
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
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1500
    }),
    this.zhenxinSuccess();
    setTimeout(function () {
      wx.stopPullDownRefresh()
    },1500);
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

  },
  // 页面滚动触发事件的处理函数
  onPageScroll: function (a) {
    this.setData({
      topFlag: a.scrollTop < 200,
    }); 
  },
  top: function(){
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  // 封装函数
  zhenxinSuccess() {
    ZhenxinRequest('home/swiperdata').then(res =>     {
      // 打印数据
      //console.log(res.data.message);

      this.setData({
        swiperData: res.data.message
      })
    })

    ZhenxinRequest('home/catitems').then(res => {
      // 打印数据
      //console.log(res.data.message);

      this.setData({
        catiData: res.data.message
      })
    })

    ZhenxinRequest('home/floordata').then(res => {
      // 打印数据
      //console.log(res.data.message);

      this.setData({
        floorData: res.data.message
      })
    })
  }
})