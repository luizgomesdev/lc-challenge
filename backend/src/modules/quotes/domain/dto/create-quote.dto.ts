import { IsNotEmpty } from 'class-validator';

export class CreateQuoteDTO {
  @IsNotEmpty({ message: 'From Departure is required' })
  fromDepartureId: string;

  @IsNotEmpty({ message: 'To Departure is required' })
  toDepartureId: string;

  @IsNotEmpty({ message: 'Departure Date is required' })
  departureDate: Date;

  @IsNotEmpty({ message: 'Return Date is required' })
  departureReturnDate: Date;

  @IsNotEmpty({ message: 'Transportation is required' })
  transportationId: string;

  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsNotEmpty({ message: 'Quantity is required' })
  quantity: number;
}
