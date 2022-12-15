import { CustomerStatusEnum } from "../enums/customer-status.enum";

export interface ICustomer {
  id: string;

  name: string;

  status: CustomerStatusEnum;

  createdAt: Date;

  updatedAt: Date;
}
