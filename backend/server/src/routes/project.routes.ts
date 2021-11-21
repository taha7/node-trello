import { RouterInterface } from '@app/contracts/router.interface';
import { ProjectController } from '@app/controllers/project.controller';
import { Router } from 'express';

export class ProjectRoutes implements RouterInterface {
  private projectRoutes: Router;

  build(): Router {
    this.projectRoutes = Router();

    this.routes();

    return this.projectRoutes;
  }

  routes(): void {
    // @GET /projects/craete
    this.projectRoutes.get('/projects/create-form', ProjectController.createForm);
  }
}
