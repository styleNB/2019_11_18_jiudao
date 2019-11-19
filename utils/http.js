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
        params.success(res)
      },
      fail: (err) => {
        // params.fail(err)
      }
    })
  }
}

export { HTTP }