import { IsString } from 'class-validator';
import { DepartmentSchemaInterface } from '@/app/departments/create/interfaces/department-schema.interface';

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
