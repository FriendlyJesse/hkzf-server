import { Entity, Column } from 'typeorm'
import { DateEntity } from './common/date'

@Entity('news')
export class News extends DateEntity {
  @Column({
    length: 100
  })
  title: string

  @Column({
    length: 100,
    nullable: true
  })
  description: string

  @Column({
    type: 'text',
    nullable: true
  })
  content: string

  @Column()
  img: string

  @Column()
  from: string
}
