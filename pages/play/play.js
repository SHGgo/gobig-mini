// pages/play/play.js
import { getOneVideo } from '../../api/video'
import { formatTime } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    videoInfo: null,
    vid:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      vid:options.vid
    })
    this.getVideo()
  },
  getVideo() {
    const json = {
      vid: this.data.vid
    }
    getOneVideo(json).then((response) => {
      const videoInfo = this.videoInfoFix(response.video)
      this.setData({
        videoInfo: videoInfo
      })
    }).catch((e) => {
      console.log(e)
    })
  },
  videoInfoFix(videoInfo){
    videoInfo.videoRes = videoInfo.videoRes.search(/^\/.+/i) < 0 ? videoInfo.videoRes : 'https://www.gobigtonight.top'+videoInfo.videoRes
    videoInfo.releaseDate = formatTime(videoInfo.releaseDate)
    return videoInfo
  },
  onSwiperChange(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  onTabTap(e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})