// pages/home/home.js
import {getVideo} from '../../api/video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    videoNum:10,
    videoList:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCommendVideo()
  },
  //api
  getCommendVideo(){
    const json = {
      videoNum:this.data.videoNum
    }
    getVideo(json).then((response)=>{
      this.setData({
        videoList:response.videoList
      })
    }).catch((e)=>{
      console.log(e);
    })
  },
  //获取当前滑块的index
  swiperChange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
})