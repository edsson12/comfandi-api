import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export enum DocumentType {
  CC = 'CC',
  CE = 'CE',
  TI = 'TI',
}
export class CreateFamilyNucleusDto {
  @ApiProperty({
    name: 'is_family_head',
    description: 'Indica si la persona es cabeza de familia',
    example: true,
  })
  @IsBoolean()
  is_family_head: boolean;

  @ApiProperty({
    name: 'first_name',
    description: 'Primer nombre de la persona',
    example: 'Juan',
  })
  @IsString({ message: 'Por favor ingrese un primer nombre' })
  first_name: string;

  @ApiProperty({
    name: 'second_name',
    description: 'Segundo nombre de la persona',
    nullable: true,
    example: 'David',
  })
  @IsString()
  @IsOptional()
  second_name: string;

  @ApiProperty({
    name: 'first_last_name',
    description: 'Primer apellido de la persona',
    example: 'Gomez',
  })
  @IsString({ message: 'Por favor ingrese un primer apellido' })
  first_last_name: string;

  @ApiProperty({
    name: 'second_last_name',
    description: 'Segundo apellido de la persona',
    example: 'Gomez',
  })
  @IsString()
  @IsOptional()
  second_last_name: string;

  @ApiProperty({
    name: 'birth_date',
    description: 'Fecha de nacimiento de la persona',
    example: '1994-07-12T05:00:00.000Z',
  })
  @IsDateString()
  birth_date: Date;

  @ApiProperty({
    name: 'document_type',
    description: 'Tipo de documento de la persona',
    example: 'CC',
    enum: DocumentType,
  })
  @IsEnum(DocumentType, {
    message: 'Por favor ingrese un tipo de documento válido',
  })
  document_type: DocumentType;

  @ApiProperty({
    name: 'document_number',
    description: 'Número de documento de la persona',
    example: '1234567890',
  })
  @IsString({ message: 'Por favor ingrese un número de documento' })
  document_number: string;
}
