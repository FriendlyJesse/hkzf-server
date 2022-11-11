import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('areas')
export class Area {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  city: string

  @Column()
  city_name: string

  @Column()
  area: string

  @Column()
  area_name: string

  @Column()
  street: string

  @Column()
  street_name: string

  @Column()
  community: string

  @Column()
  community_name: string

  @CreateDateColumn({
    type: 'datetime'
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'datetime'
  })
  updatedAt: Date
}
