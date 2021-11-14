import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Project } from '@app/entities/project';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @OneToMany(() => Project, (project) => project.group)
  projects: Project[];
}
