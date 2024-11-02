import { Module } from '@nestjs/common';
import { FamilyNucleusModule } from './family-nucleus/family-nucleus.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    FamilyNucleusModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'comfandi',
      password: 'admin',
      database: 'comfandi',
      autoLoadEntities: true,
      synchronize: true,
      // logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
