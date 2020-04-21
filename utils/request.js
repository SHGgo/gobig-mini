/**
 * 抓取远端API的结构
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
module.exports = function ({url,method='get', data}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: Object.assign({}, data),
      method: method,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}