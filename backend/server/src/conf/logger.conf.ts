import path from 'path';

export const logger = {
  defaultPath: path.resolve(__dirname, '..', '..', 'logs'),
} as const;
