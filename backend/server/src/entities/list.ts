import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '@app/entities/project';
import { Task } from './task';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @ManyToOne(() => Project, (project) => project.lists)
  project: Project;

  @OneToMany(() => Task, (task) => task.list)
  tasks: Task[];
}
