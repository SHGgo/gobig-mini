// pages/home/home.js
import {getCommendVideoList,getLeaderVideoList} from '../../api/video'
import { formatTime } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    videoNum:10,
    pageHeight:0,
    commendVideoList:null,
    leaderVideoList:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCommendVideo()
    this.getLeaderVideo()
  },
  onPullDownRefresh(){
    this.getCommendVideo()
    this.getLeaderBoard()
  },
  //api
  getCommendVideo(){
    const json = {
      videoNum:this.data.videoNum
    }
    getCommendVideoList(json).then((response)=>{      
      this.setData({
        commendVideoList:response.videoList
      })
      wx.stopPullDownRefresh()
    }).catch((e)=>{
      console.log(e);
      wx.stopPullDownRefresh()
    })
  },
  getLeaderVideo(){
    const json = {
      videoNum:this.data.videoNum
    }
    getLeaderVideoList(json).then((response)=>{
      response.videoList.filter((ele)=>{
        ele.releaseDate = formatTime(ele.releaseDate)
        return true;
      })
      this.setData({
        leaderVideoList:response.videoList
      })
      wx.stopPullDownRefresh()
    }).catch((e)=>{
      console.log(e);
      wx.stopPullDownRefresh()
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