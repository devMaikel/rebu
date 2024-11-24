import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class  $npmConfigName1732393810837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'drivers',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'car',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'rating',
                        type: 'float',
                        isNullable: false,
                    },
                    {
                        name: 'review',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'price_km',
                        type: 'decimal(10,2)',
                        isNullable: false,
                    },
                    {
                        name: 'minimum_km',
                        type: 'decimal(10,2)',
                        isNullable: false,
                    },
                ],
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'rides',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'customer_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'origin',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'destination',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'distance',
                        type: 'float',
                        isNullable: false,
                    },
                    {
                        name: 'duration',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'value',
                        type: 'float',
                        isNullable: false,
                    },
                    {
                        name: 'driver_id',
                        type: 'int',
                        isNullable: false,
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'rides',
            new TableForeignKey({
                columnNames: ['driver_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'drivers',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('ride', 'FK_ride_driver');

        await queryRunner.dropTable('ride');

        await queryRunner.dropTable('driver');
    }
}

    // {
    // "customer_id": string,
    // "origin": string,
    // "destination": string,
    // "distance": number,
    // "duration": string,
    // "driver": {
    // "id": number,
    // "name": string
    // },
    // "value": number
    // }