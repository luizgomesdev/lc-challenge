import { QuoteStatusEnum } from "./../enums/quote-status.enum";

import { ICustomer } from "./customer.entity";
import { IDeparture } from "./departure.entity";
import { ITransportation } from "./transportation.entity";

export interface IQuote {
  id: string;

  status: QuoteStatusEnum;

  orderNumber: number;

  fromDeparture: IDeparture;

  toDeparture: IDeparture;

  departureDate: Date;

  departureReturnDate: Date;

  quantity: number;

  price?: number;

  transportation: ITransportation;

  customer: ICustomer;

  createdAt: Date;

  updatedAt: Date;
}
