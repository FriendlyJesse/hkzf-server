import { Inject, Controller, Get, Query } from '@midwayjs/decorator'
import { Context } from '@midwayjs/koa'

// service
import { InfoService } from '../service/info.service'

// validate
import { Validate } from '@midwayjs/validate'
import { getAreaDTO } from '../dto/area'

@Controller('/area')
export class AreaController {
  @Inject()
  ctx: Context

  @Inject()
  infoService: InfoService

  @Get('/info')
  @Validate()
  async getInfo(@Query() query: getAreaDTO) {
    return await this.infoService.get(query)
  }
}
