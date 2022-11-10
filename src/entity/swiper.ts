import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'

@Entity('swiper')
export class Swiper {
  @PrimaryGeneratedColumn()
  id: number

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

  @CreateDateColumn({
    type: 'timestamp'
  })
  createdDate: Date

  @UpdateDateColumn({
    type: 'timestamp'
  })
  updateDate: Date

  @DeleteDateColumn({
    type: 'timestamp'
  })
  deleteDate: Date
}
