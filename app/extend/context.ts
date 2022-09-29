
import { Context } from 'egg'
import { generUrl } from '../utils'

export default {
  /**
   * 统一发送请求
   * @param params 
   */
  async send(params: Object) {
    const url = generUrl(params)
    console.log('----', url, '++++')
    const result = await (this as Context).curl(url, {
      method: 'GET',
      timeout: 60000,
      dataType: 'json',
      contentType: 'json',
    })
    const { data } = result
    return data
  }
}