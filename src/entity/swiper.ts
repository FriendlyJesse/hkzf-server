import { Entity, Column } from 'typeorm'
import { DateEntity } from './common/date'

@Entity('swiper')
export class Swiper extends DateEntity {
  @Column({
    length: 100
  })
  name: string

  @Column({
    type: 'text',
    nullable: true
  })
  description?: string

  @Column()
  img: string

  @Column({
    default: false
  })
  isPublished: boolean
}
