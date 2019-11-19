import { config } from '../config.js'

class HTTP{
  request (params) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method ? params.method : 'GET',
      data: params.data,
      header: {
        'content-type': 'application/json',
      },
      success: (res) => {
        if (res.statusCode.toString().startsWith('2')) {
          params.success(res)
        } else {
          wx.showToast({
            title: '请检查网络',
            icon: 'none',
            mask: true,
            duration: 2000
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '请检查网络',
          icon: 'none',
          mask: true,
          duration: 2000
        })
      }
    })
  }
}

export { HTTP }