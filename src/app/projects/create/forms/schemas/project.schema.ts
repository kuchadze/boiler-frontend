import { IsDecimal, IsString } from 'class-validator';
import { ProjectSchemaInterface } from '@/src/app/projects/create/types/interfaces/project-schema.interface';

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
