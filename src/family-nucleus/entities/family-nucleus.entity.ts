import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DocumentType } from '../dto/create-family-nucleus.dto';

@Entity()
export class FamilyNucleus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: false, nullable: false })
  is_family_head: boolean;

  @Column({ type: 'varchar', length: 100, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  second_name: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  first_last_name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  second_last_name: string;

  @Column({ type: 'timestamp', nullable: false })
  birth_date: Date;

  @Column({
    type: 'enum',
    enum: DocumentType,
    default: DocumentType.CC,
    nullable: false,
  })
  document_type: DocumentType;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  document_number: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  updated_at: Date;
}
