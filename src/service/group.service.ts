import { Provide } from '@midwayjs/decorator'
// orm
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Group } from '../entity/group'
import { Repository } from 'typeorm'
// dto
import { GroupDTO } from '../dto/group'

@Provide()
export class GroupService {
  @InjectEntityModel(Group)
  Model: Repository<Group>

  async save(body: GroupDTO) {
    return await this.Model.save(body)
  }

  async get() {
    return await this.Model.find()
  }
}
