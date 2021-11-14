import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Group } from '@app/entities/group';
import { List } from '@app/entities/list';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, (group) => group.projects)
  group: Group;

  @OneToMany(() => List, (list) => list.project)
  lists: List[];

  @Column('varchar')
  title: string;

  @Column('text')
  description: string;
}
