import { Customer } from 'src/modules/customers/domain/entities/customer.entity';
import { Departure } from 'src/modules/departures/domain/entities/departure.entity';
import { Transportation } from 'src/modules/transportations/domain/entities/transportation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QuoteStatusEnum } from '../enums/quote-status.enum';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: Object.values(QuoteStatusEnum),
    default: QuoteStatusEnum.PENDING,
  })
  status: QuoteStatusEnum;

  @Column({
    name: 'order_number',
    type: 'numeric',
    unique: true,
    generated: 'increment',
  })
  orderNumber: number;

  @ManyToOne(() => Departure, (departure) => departure.id, { eager: true })
  @JoinColumn({ name: 'from_departure_id' })
  fromDeparture: Departure;

  @ManyToOne(() => Departure, (departure) => departure.id, { eager: true })
  @JoinColumn({ name: 'to_departure_id' })
  toDeparture: Departure;

  @Column({ name: 'departure_date' })
  departureDate: Date;

  @Column({ name: 'departure_return_date' })
  departureReturnDate: Date;

  @Column({ type: 'numeric' })
  quantity: number;

  @Column({ type: 'numeric', nullable: true })
  price?: number;

  @ManyToOne(() => Transportation, (transportation) => transportation.id, {
    eager: true,
  })
  @JoinColumn({ name: 'transportation_id' })
  transportation: Transportation;

  @ManyToOne(() => Customer, (customer) => customer.id, { eager: true })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
