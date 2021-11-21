import 'module-alias/register';
import 'reflect-metadata';
import express, { Application } from 'express';
import { createConnection } from 'typeorm';
import logger from '@app/services/app/logger';
import { ProjectRoutes } from '@app/routes/project.routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  public run() {
    this.app.listen(8000, () => {
      logger.info('Your application started successfully at port 8000');
    });
  }

  public async build() {
    try {
      await this.createDatabaseConnection();
      logger.info('database connected successfully');
      this.beforeMiddlewares();
      this.routes();
      this.afterMiddlewares();
    } catch (e) {
      logger.error(e);
    }
  }

  private async createDatabaseConnection() {
    return createConnection();
  }

  private beforeMiddlewares() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(new ProjectRoutes().build());
  }

  private afterMiddlewares() {
    //
  }
}

export default new App();
