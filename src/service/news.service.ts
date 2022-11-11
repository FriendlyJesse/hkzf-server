import { Provide } from '@midwayjs/decorator'
// orm
import { InjectEntityModel } from '@midwayjs/typeorm'
import { News } from '../entity/news'
import { Repository } from 'typeorm'
// dto
import { NewsDTO } from '../dto/news'

@Provide()
export class NewsService {
  @InjectEntityModel(News)
  Model: Repository<News>

  async save(body: NewsDTO) {
    return await this.Model.save(body)
  }

  async get(params) {
    return await this.Model.find(params)
  }
}
