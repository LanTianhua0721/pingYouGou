// 自定义函数
const ZhenxinRequest = function(path, data){
  //拼接urls
  let url = 'https://www.zhengzhicheng.cn/api/public/v1/' + path;
  return new Promise(function(resolve,reject){
    wx.request({
      url: url,
      data: data,
      success: (res) => {
        // 把数据传给“成功解决”
        resolve(res);
      }
    })
  });
}

//导出函数
export default ZhenxinRequest;