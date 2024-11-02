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
  @IsBoolean()
  is_family_head: boolean;

  @IsString({ message: 'Por favor ingrese un primer nombre' })
  first_name: string;

  @IsString()
  @IsOptional()
  second_name: string;

  @IsString({ message: 'Por favor ingrese un primer apellido' })
  first_last_name: string;

  @IsString()
  @IsOptional()
  second_last_name: string;

  @IsDateString()
  birth_date: Date;

  @IsEnum(DocumentType, {
    message: 'Por favor ingrese un tipo de documento válido',
  })
  document_type: DocumentType;
  
  @IsString({ message: 'Por favor ingrese un número de documento' })
  document_number: string;
}
