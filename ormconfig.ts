import 'dotenv/config';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER.toString(),
  password: process.env.POSTGRES_PASSWORD.toString(),
  database: process.env.POSTGRES_DATABASE.toString(),
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
};

export default config;
