import { Controller } from 'egg'

export default class JdController extends Controller {
  /**
   * 获取物料
   */
  public async getDataList() {
    const { ctx } = this
    const result = await ctx.send({
      method: 'jd.union.open.order.query',
      '360buy_param_json': {
        goodsReq: {
          eliteId: 22,
        }
      },
    })
    ctx.body = result
  }

  /**
   * 搜索物料
   */
  public async searchGoodList() {
    const { ctx } = this
    const { q } = ctx.request.query
    if (!q) return
    const result = await ctx.send({
      method: 'taobao.tbk.dg.material.optional',
      material_id: '17004',
      q,
    })
    ctx.body = result
  }
}