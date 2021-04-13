import {
  BaseEntity,
  Entity,
  Unique,
  //PrimaryGeneratedColumn,
  Column,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@Unique(['id', 'title'])
export class Tool extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  title: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  description: string;

  @Column({ nullable: false, type: 'varchar', length: 20 })
  tags: [string];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
