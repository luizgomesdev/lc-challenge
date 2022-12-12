import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransportationsTable1670790620959
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'transportations',
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

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transportations');
  }
}
