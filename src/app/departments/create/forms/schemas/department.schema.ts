import { IsString } from 'class-validator';
import { DepartmentSchemaInterface } from '@/src/app/departments/create/types/interfaces/department-schema.interface';

export class DepartmentSchema implements DepartmentSchemaInterface {
  @IsString()
  name!: string;

  @IsString()
  manager!: string;

  @IsString()
  location!: string;

  toPlain(): DepartmentSchemaInterface {
    return {
      name: this.name,
      manager: this.manager,
      location: this.location,
    };
  }
}