import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  username: 'root',
  password: 'rootpassword',
  database: 'test',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  authSource: 'admin',
  synchronize: true,
};
