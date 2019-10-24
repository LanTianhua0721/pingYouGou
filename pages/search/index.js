// pages/search/index.js

import ZhenxinRequest from '../../utils/request.js';
let timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    keyword:'',

  },

  // cancil事件
  handleCancel:function(){
    // 清空原有数据
    
    this.setData({
      listData: [],
      keyword: '',
    })
  },

  // 搜索框输入事件
  
  handleKeyword: function(e){

    let keyword = e.detail.value;

    this.setData({
      keyword: keyword,
    });

    clearTimeout(timer);
    timer = setTimeout(()=>{
      // 根据关键字 调用回调函数
      ZhenxinRequest('goods/qsearch', { query: keyword }).then(res => {
        console.log(res.data.message);
        // 更新检索数据 
        this.setData({
          listData: res.data.message
        });
      });
    },5000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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