/**
 * 
 * @param {Number} time 
 * @param {String} format 
 */
const formatTime = (time, format='Y-M-D') => {
  //数据转化
  function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n
  }

  let formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  let returnArr = [];

  //13位不用乘1000,10位要乘1000
  // let date = new Date(number * 1000);
  let date = new Date(time);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));
  for (let i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }

  return format;
}

module.exports = {
  formatTime: formatTime
}
