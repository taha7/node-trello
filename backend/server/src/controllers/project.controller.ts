import { ProjectService } from '@app/services/project.service';
import { Request, Response } from 'express';

export class ProjectController {
  public static async createForm(req: Request, res: Response): Promise<void> {
    res.json(await new ProjectService().createForm());
  }
}
