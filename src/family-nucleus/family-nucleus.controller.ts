import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FamilyNucleusService } from './family-nucleus.service';
import { CreateFamilyNucleusDto } from './dto/create-family-nucleus.dto';
import { UpdateFamilyNucleusDto } from './dto/update-family-nucleus.dto';

@Controller('family-nucleus')
export class FamilyNucleusController {
  constructor(private readonly familyNucleusService: FamilyNucleusService) {}

  @Post()
  create(@Body() createFamilyNucleusDto: CreateFamilyNucleusDto) {
    return this.familyNucleusService.create(createFamilyNucleusDto);
  }

  @Get()
  findAll() {
    return this.familyNucleusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.familyNucleusService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFamilyNucleusDto: UpdateFamilyNucleusDto,
  ) {
    return this.familyNucleusService.update(+id, updateFamilyNucleusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.familyNucleusService.remove(+id);
  }
}
