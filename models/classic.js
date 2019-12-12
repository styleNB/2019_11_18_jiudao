import { HTTP } from '../utils/http.js'

class ClassicModel extends HTTP {
  getLatest (page, sCallback) {
    let res = wx.getStorageSync(this._getKey(page))
    if (!res) {
      this._classic(page, sCallback)
    } else {
      sCallback(res)
    }
  }

  getPrevious (page, sCallback) {
    let res = wx.getStorageSync(this._getKey(page))
    if (!res) {
      this._classic(page, sCallback)
    } else {
      sCallback(res)
    }
  }

  getNext (page, sCallback) {
    let res = wx.getStorageSync(this._getKey(page))
    if (!res) {
      this._classic(page, sCallback)
    } else {
      sCallback(res)
    }
  }

  _classic(page, sCallback) {
    this.request({
      url: '/list',
      success: (res) => {
        sCallback(res.data[page])
        console.log(res)
        try { wx.setStorageSync(this._getKey(page), res.data[page]) } catch (err) { console.error('setStorageSync失败', err) }
      }
    })
  }

  _getKey (index) {
    return 'classic-' + index
  }
}

export { ClassicModel }