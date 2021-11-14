export default {
  type: 'mysql',
  url: 'mysql://root:password@server-db/server_db',
  // host: 'server-db',
  // port: 8201,
  // username: 'root',
  // password: 'password',
  // database: 'server_db',
  synchronize: true,
  logging: true,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
};
