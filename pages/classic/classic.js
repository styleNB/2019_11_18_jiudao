// pages/fashion/fashion.js
import { ClassicModel } from '../../models/classic.js'
const classic = new ClassicModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    like: false,
    likeNumber: 1,
    list: {},
    page: 0,
  },

  onLike () {
    this.setData({
      like: !this.data.like,
      likeNumber: !this.data.like ? this.data.likeNumber + 1 : this.data.likeNumber - 1
    })
  },

  onPrevious() {
    let page = this.data.page - 1
    classic.getPrevious(page, (res) => {
      this.setData({
        page: page,
        list: res
      })
      console.log('previous', res)
    })
  },
  onNext () {
    let page = this.data.page + 1
    classic.getNext(page, (res) => {
      this.setData({
        page: page,
        list: res
      })
      console.log('next', res)
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = this.data.page
    classic.getLatest(page, (res) => {
      this.setData({
        list: res
      })
      console.log('this.data.list.id', this.data.list.id)
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