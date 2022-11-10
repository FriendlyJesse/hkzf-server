import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn
} from 'typeorm'

export abstract class DateEntity {
  @PrimaryGeneratedColumn()
  id: number

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
