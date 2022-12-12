import { Customer } from 'src/modules/customers/domain/entities/customer.entity';
import { Departure } from 'src/modules/departures/domain/entities/departure.entity';
import { Transportation } from 'src/modules/transportations/domain/entities/transportation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QuoteStatusEnum } from '../enums/quote-status.enum';

@Entity()
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
  ordeNumber: number;

  @ManyToOne(() => Departure, (departure) => departure.id)
  fromDeparture: Departure;

  @ManyToOne(() => Departure, (departure) => departure.id)
  toDeparture: Departure;

  @Column({ name: 'departure_date' })
  departureDate: Date;

  @Column({ name: 'departure_return_date' })
  departureReturnDate: Date;

  @Column({ type: 'numeric' })
  quantity: number;

  @ManyToOne(() => Transportation, (transportation) => transportation.id)
  transportation: Transportation;

  @ManyToMany(() => Customer, (customer) => customer.id)
  customers: Customer[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
