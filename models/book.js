import { HTTP } from '../utils/http-p.js'

class BookMode extends HTTP {
  getHotList () {
    return this.request({
      url: '/list',
    })
  }
} 

export { BookMode }