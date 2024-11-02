import { PartialType } from '@nestjs/mapped-types';
import { CreateFamilyNucleusDto } from './create-family-nucleus.dto';

export class UpdateFamilyNucleusDto extends PartialType(CreateFamilyNucleusDto) {}
