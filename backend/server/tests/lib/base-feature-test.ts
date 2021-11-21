import { Application } from 'express';
import { getConnection } from 'typeorm';
import { BaseTest } from './base-test';

export class BaseFeatureTest extends BaseTest {
  protected app: Application;

  constructor(context: string, tests: Array<string>) {
    super(context, tests);
    this.refreshDatabase();
  }

  refreshDatabase(): void {
    afterEach(async () => {
      const entities = getConnection().entityMetadatas;
      for (const entity of entities) {
        const repository = getConnection().getRepository(entity.name);
        await repository.query(`SET FOREIGN_KEY_CHECKS = 0;`);
        await repository.query(`DELETE FROM \`${entity.tableName}\`;`);
        await repository.query(`ALTER TABLE \`${entity.tableName}\` AUTO_INCREMENT = 1;`);
      }
    });
  }
}
