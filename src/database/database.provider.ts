import { TypeOrmModule } from '@nestjs/typeorm';

export const DatabaseProvider = [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'db-nest-test',
    synchronize: true,
    entities: [__dirname + 'dist/src/modules/**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + 'dist/migrations/*{.ts,.js}'],
   }),
];