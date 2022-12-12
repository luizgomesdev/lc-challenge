import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateQuotesTable1670790878193 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'quotes',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'status',
          type: 'enum',
          default: 'PENDING',
          enum: ['PENDING', 'WON', 'LOST'],
        },

        {
          name: 'order_number',
          type: 'numeric',
          generationStrategy: 'increment',
          default: "nextval('order_number_seq')",
        },
        {
          name: 'from_departure_id',
          type: 'uuid',
        },
        {
          name: 'to_departure_id',
          type: 'uuid',
        },
        {
          name: 'departure_date',
          type: 'timestamp',
        },
        {
          name: 'departure_return_date',
          type: 'timestamp',
        },
        {
          name: 'quantity',
          type: 'numeric',
        },
        {
          name: 'transportation_id',
          type: 'uuid',
        },
        {
          name: 'customer_id',
          type: 'uuid',
        },

        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
        },
      ],
    });

    const departureFromForeignKey = new TableForeignKey({
      columnNames: ['from_departure_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'departures',
      onUpdate: 'CASCADE',
    });

    const departureToForeignKey = new TableForeignKey({
      columnNames: ['to_departure_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'departures',
      onUpdate: 'CASCADE',
    });

    const transportationForeignKey = new TableForeignKey({
      columnNames: ['transportation_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'transportations',
      onUpdate: 'CASCADE',
    });

    const customerForeignKey = new TableForeignKey({
      columnNames: ['customer_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'customers',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createTable(table);
    await queryRunner.createForeignKeys('quotes', [
      departureFromForeignKey,
      departureToForeignKey,
      transportationForeignKey,
      customerForeignKey,
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quotes');
  }
}
