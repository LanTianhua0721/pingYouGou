// pages/cate/index.js

//调用
import ZhenxinRequest from '../../utils/request.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    allData:[],
    leftData:[],
    currentId:1,
    rightData:[],
    rightDataRaw:[],
    zxCurrentId:[],
  },
  // 菜单点击事件
  handleChange:function(e){
    // console.log(e.target.dataset.id);
    // 改变当前id
    // this.setData({
    //   currentId: e.target.dataset.id,
    // })

    // 保存当前id
    let zxCurrentId = e.target.dataset.id;
    let data = this.data.allData;
    // 点击获得右侧数据
    let rightDataRaw = data.filter(item => {
      // 过滤条件
      return zxCurrentId === item.cat_id;
    })
    // 获得具体子数据
    let zxRightData = rightDataRaw[0].children;
    // 更新右侧数据
    this.setData({
      currentId: zxCurrentId,
      rightData: zxRightData,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取分类数据
    ZhenxinRequest('categories').then(res=>{
      // 获取全部数据
      let data = res.data.message;
      console.log(data);
      // 获取左部数据
      let leftData = data.map(item =>{
        return {
          id:item.cat_id,
          name:item.cat_name,
        }
      });
      // console.log(leftData);

      // 获得右部数据
      let rightDataRaw = data.filter(item=>{
        // 过滤条件
        return this.data.currentId === item.cat_id;
      });
      // console.log(rightDataRaw);

      let rightData = rightDataRaw[0].children;
      // console.log(rightData);

      // 更新数据
      this .setData({
        allData: res.data.message,
        leftData: leftData,
        rightData: rightData,
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