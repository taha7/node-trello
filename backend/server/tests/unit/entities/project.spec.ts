import { Project } from '@app/entities/project';
import { Group } from '@app/entities/group';
import { expect } from 'chai';

describe('Project entity', () => {
  it('Should belogs to a group', () => {
    const project = new Project();
    project.group = new Group();

    expect(project.group).to.be.an.instanceOf(Group);
  });
});
