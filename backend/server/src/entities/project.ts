import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Group } from './group';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, (group) => group.projects)
  group: Group;

  @Column('varchar')
  title: string;

  @Column('text')
  description: string;
}
