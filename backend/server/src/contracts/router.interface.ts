import { Router } from 'express';

export interface RouterInterface {
  build(): Router;
  routes(): void;
}
