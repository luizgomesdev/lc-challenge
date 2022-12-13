import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCustomersTable1670727184183 implements MigrationInterface {
  private readonly table = new Table({
    name: 'customers',
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'status',
        type: 'enum',
        enum: ['LEAD', 'CUSTOMER'],
        default: "'LEAD'",
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
