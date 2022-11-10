import { Provide } from '@midwayjs/decorator'
// orm
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Swiper } from '../entity/swiper'
import { Repository } from 'typeorm'
// dto
import { SwiperDTO, PatchSwiperDTO } from '../dto/swiper'

@Provide()
export class SwiperService {
  @InjectEntityModel(Swiper)
  swiperModel: Repository<Swiper>

  async saveSwiper(body: SwiperDTO) {
    return await this.swiperModel.save(body)
  }

  async getSwipers() {
    return await this.swiperModel.find()
  }

  async patchSwiper({ id, ...reset }: PatchSwiperDTO) {
    let result: SwiperDTO = await this.swiperModel.findOne({
      where: { id }
    })
    result = { ...result, ...reset }
    return await this.swiperModel.save(result)
  }

  async delSwiper({ id }: PatchSwiperDTO) {
    return this.swiperModel.softDelete(id)
  }
}
