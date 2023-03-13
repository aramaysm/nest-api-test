import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
 
const configService = new ConfigService();
 
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST').toString(),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD').toString(),
  database: configService.get('POSTGRES_DB'),
  entities: ["dist/**/**/**/**/*.entity{.ts,.js}"],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: true,
  
});
