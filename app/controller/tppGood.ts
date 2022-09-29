import { Controller } from 'egg'

export default class TPPGood extends Controller {
  public async getHotAndShowFilms() {
    const { ctx } = this
    const result = await ctx.send({
      method: 'taobao.film.hotandsoonshows.get',
    })
    ctx.body = result
  }
}