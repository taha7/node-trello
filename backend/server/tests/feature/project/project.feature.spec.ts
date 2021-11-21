import application from '@app/app';
import { expect } from 'chai';
import { Group } from '@app/entities/group';

import { BaseFeatureTest } from '../../lib/base-feature-test';
import supertest from 'supertest';

class ProjectFeatureTest extends BaseFeatureTest {
  constructor(context: string) {
    super(context, ['containsGroupsWhenCreateProjectForm']);
  }

  async before() {
    await application.build();
    this.app = application.app;
  }

  async containsGroups() {
    const groups = await Promise.all([Group.create({ title: 'test' }).save(), Group.create({ title: 'test2' }).save()]);

    const res = await supertest(this.app)
      .get('/projects/create-form')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).to.have.property('groups');
    expect(res.body['groups'].map((g: Group) => g.id)).eql(groups.map((g: Group) => g.id));
  }
}

new ProjectFeatureTest('Project Controller');
