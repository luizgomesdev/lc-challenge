import { IsString } from 'class-validator';

export class CreateCustomerDTO {
  @IsString()
  name: string;
}
