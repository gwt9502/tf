import * as crypto from 'crypto'
import sortObject from 'sort-object'
import * as qs from 'querystring'
import dayjs from 'dayjs'
import { APPSECRET, BASEURL, DEFAULTPARAMS } from './constant'

/**
 * 获取签名
 * @param params 
 */
export const generSign = (params: Object, type) => {
  const sortParams = sortObject(params)
  const appSecret = APPSECRET[type]
  let baseString = appSecret
  for (const key in sortParams) {
    baseString += key + sortParams[key]
  }
  baseString += appSecret
  const sum = crypto.createHash('md5')
  sum.update(baseString, 'utf8')
  return sum.digest('hex').toUpperCase()
}

/**
 * 格式化参数
 * @param params 
 */
export const generUrl = (params: Object) => {
  const type = (params as any).method.split('.')[0]
  const newParams = {
    ...params,
    ...DEFAULTPARAMS[type],
    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  }
  for (const [key, value] of Object.entries(newParams)) {
    if (!!value) {
      if (typeof value === 'object') {
        newParams[key] = JSON.stringify(value)
      }
    } else {
      delete newParams[key]
    }
  }
  const sign = generSign(newParams, type)
  const query = { ...newParams, sign }
  return `${BASEURL[type]}?${qs.stringify(query)}`
}
