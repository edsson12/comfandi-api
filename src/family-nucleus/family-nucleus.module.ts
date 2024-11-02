import { Module } from '@nestjs/common';
import { FamilyNucleusService } from './family-nucleus.service';
import { FamilyNucleusController } from './family-nucleus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyNucleus } from './entities/family-nucleus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FamilyNucleus])],
  controllers: [FamilyNucleusController],
  providers: [FamilyNucleusService],
})
export class FamilyNucleusModule {}
