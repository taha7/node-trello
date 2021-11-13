export default {
  type: 'mysql',
  host: 'db',
  port: 3307,
  username: 'root',
  password: 'password',
  database: 'trello_db',
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
};
