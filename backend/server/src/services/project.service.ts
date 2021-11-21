import { Group } from '@app/entities/group';
import { getRepository } from 'typeorm';

export class ProjectService {
  public async createForm(): Promise<{ groups: Group[] }> {
    return { groups: await getRepository(Group).find() };
  }
}
