// pages/goods-list/index.js

//调用
import ZhenxinRequest from '../../utils/request.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    holderPic:'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t30j30i20i2glm.jpg',
    type: '',
    nowIndex: 0,
    zx: ['综合', '销量', '价格'],
    listData:[],
    total: 0,
  },
  // 定义参数
  totalPage: 0,//主页码
  paramData:{
    query: '',
    pagenum: 1,
    pagesize: 10,
  },
  handleOutChange:function(e){
    console.log("外部点击！");
    console.log(e.detail);

    // 保存组件内部传递出来的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.query);
    // 将传递
    this.setData({
      type: options.query
    });
    // 模拟从服务器获得数据，调整选项卡的内容
    // this.setData({
    //   zx: ['1~', '2~', '3~'],
    // })
    // 初始化参数
    this.paramData.pagenum=1;
    this.paramData.pagesize=10;

    // 设置查询条件
    this.paramData.query = this.data.type;

    this.loadData();
  },

  /**
   * 加载数据通用方法封装
   */
  loadData:function(){
    // 利用关键字 向服务器发送请求
    ZhenxinRequest('goods/search', { query: this.data.type, pagenum: 1, pagesize: 10 }).then(res => {
      console.log(res.data.message);
      // 更新检索结果和关键字
      this.setData({
        listData: this.data.listData.concat(res.data.message.goods),
        total: res.data.message.total,
      });
      // 计算主页码  总条数 / 每页条数
      //this.totalPage = Math.ceil(this.data.total / this.data.pagesize);
      this.totalPage = Math.ceil(this.data.total / this.paramData.pagesize);
    });
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
    console.log("已触及底部");
    if(this.paramData.pagenum >= this.totalPage){
      wx.showToast({
        title: '没有更多数据了...',
      });
    }
    else{
      this.paramData.pagenum++;
      console.log(this.paramData);

      this.loadData();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})