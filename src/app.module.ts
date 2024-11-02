import { Module } from '@nestjs/common';
import { FamilyNucleusModule } from './family-nucleus/family-nucleus.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';

@Module({
  imports: [
    FamilyNucleusModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
      // logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
