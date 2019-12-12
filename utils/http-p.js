import { config } from '../config.js'

class HTTP {
  request({url, data = {}, method = 'GET'}) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data={}, method='GET') {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode.toString().startsWith('2')) {
          resolve(res)
        } else {
          wx.showToast({
            title: '失败',
            icon: 'none',
            mask: true,
            duration: 2000
          })
        }
      },
      fail: (res) => {
        reject()
        wx.showToast({
          title: '请检查网络',
          icon: 'none',
          duration: 1000,
        })
      },
    })
  }
}

export { HTTP }