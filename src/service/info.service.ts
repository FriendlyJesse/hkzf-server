import { Provide } from '@midwayjs/decorator'
// orm
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Area } from '../entity/area'
import { Repository } from 'typeorm'
// dto
import { getAreaDTO } from '../dto/area'

@Provide()
export class InfoService {
  @InjectEntityModel(Area)
  Model: Repository<Area>

  async get(query: getAreaDTO) {
    return await this.Model.find({
      where: query
    })
  }
}
