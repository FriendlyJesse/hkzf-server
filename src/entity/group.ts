import { Entity, Column } from 'typeorm'
import { DateEntity } from './common/date'

@Entity('group')
export class Group extends DateEntity {
  @Column({
    length: 10
  })
  title: string

  @Column({
    length: 10
  })
  description: string

  @Column()
  img: string
}
