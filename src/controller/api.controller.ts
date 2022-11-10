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
import { UserService } from '../service/user.service'
import { SwiperService } from '../service/swiper.service'
// validate
import { Validate } from '@midwayjs/validate'
import { SwiperDTO, PatchSwiperDTO } from '../dto/swiper'

@Controller('/home')
export class APIController {
  @Inject()
  ctx: Context

  @Inject()
  userService: UserService

  @Inject()
  swiperService: SwiperService

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({ uid })
    return { success: true, message: 'OK', data: user }
  }

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
