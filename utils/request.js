// 自定义函数
const ZhenxinRequest = function(path){
  //拼接urls
  let url = 'https://www.ehomespace.com/api/public/v1/' + path;
  return new Promise(function(resolve,reject){
    wx.request({
      url: url,
      success: (res) => {
        // 把数据传给“成功解决”
        resolve(res);
      }
    })
  });
}

//导出函数
export default ZhenxinRequest;