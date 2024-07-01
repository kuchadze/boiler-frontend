import { IsDecimal, IsString } from 'class-validator';
import { ProjectSchemaInterface } from '@/app/projects/create/interfaces/project-schema.interface';

export class ProjectSchema implements ProjectSchemaInterface {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsDecimal()
  budget!: string;

  @IsString()
  status!: string;

  toPlain(): ProjectSchemaInterface {
    return {
      name: this.name,
      description: this.description,
      budget: this.budget,
      status: this.status,
    };
  }
}
