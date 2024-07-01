import { IsEmail, IsNumber, IsString } from 'class-validator';
import { EmployeeSchemaInterface } from '@/src/app/employees/create/interfaces/employee-schema.interface';

export class EmployeeSchema implements EmployeeSchemaInterface {
  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  phoneNumber!: string;

  @IsString()
  jobTitle!: string;

  @IsNumber()
  salary!: number;

  @IsNumber()
  departmentId!: number;

  toPlain(): EmployeeSchemaInterface {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      jobTitle: this.jobTitle,
      salary: this.salary,
      departmentId: this.departmentId,
    };
  }
}
