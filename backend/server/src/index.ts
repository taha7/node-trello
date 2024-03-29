import 'module-alias/register';
import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import { createConnection } from 'typeorm';
import logger from '@app/services/app/logger';

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.build();
  }

  public run() {
    this.app.listen(8000, () => {
      logger.info('Your application started successfully at port 8000');
    });
  }

  private async build() {
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
    //
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('yeeeh');
    });
  }

  private afterMiddlewares() {
    //
  }
}

export default new App().run();
