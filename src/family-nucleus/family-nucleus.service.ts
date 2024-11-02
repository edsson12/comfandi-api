import { Injectable } from '@nestjs/common';
import { CreateFamilyNucleusDto } from './dto/create-family-nucleus.dto';
import { UpdateFamilyNucleusDto } from './dto/update-family-nucleus.dto';
import { Repository } from 'typeorm';
import { FamilyNucleus } from './entities/family-nucleus.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FamilyNucleusService {
  constructor(
    @InjectRepository(FamilyNucleus)
    private familyNucleusRepository: Repository<FamilyNucleus>,
  ) {}

  create(createFamilyNucleusDto: CreateFamilyNucleusDto) {
    return this.familyNucleusRepository.save(createFamilyNucleusDto);
  }

  findAll() {
    return this.familyNucleusRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} familyNucleus`;
  }

  update(id: number, updateFamilyNucleusDto: UpdateFamilyNucleusDto) {
    return this.familyNucleusRepository.update(id, updateFamilyNucleusDto);
  }

  remove(id: number) {
    return this.familyNucleusRepository.delete(id);
  }
}
