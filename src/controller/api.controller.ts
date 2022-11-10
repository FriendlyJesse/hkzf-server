import {
  Inject,
  Controller,
  Get,
  Query,
  Body,
  Post,
  Patch,
  Del
} from '@midwayjs/decorator'
import { Context } from '@midwayjs/koa'
// service
import { SwiperService } from '../service/swiper.service'
// validate
import { Validate } from '@midwayjs/validate'
import { SwiperDTO, PatchSwiperDTO } from '../dto/swiper'

@Controller('/home')
export class APIController {
  @Inject()
  ctx: Context

  @Inject()
  swiperService: SwiperService

  @Post('/swiper')
  @Validate()
  async saveSwiper(@Body() body: SwiperDTO) {
    return await this.swiperService.saveSwiper(body)
  }

  @Get('/swipers')
  @Validate()
  async getSwipers() {
    return await this.swiperService.getSwipers()
  }

  @Patch('/swiper')
  @Validate()
  async patchSwiper(@Body() body: PatchSwiperDTO) {
    return await this.swiperService.patchSwiper(body)
  }

  @Del('/swiper')
  @Validate()
  async delSwiper(@Body() body: PatchSwiperDTO) {
    return await this.swiperService.delSwiper(body)
  }
}
