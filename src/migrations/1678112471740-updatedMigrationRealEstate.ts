import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedMigrationRealEstate1678112471740 implements MigrationInterface {
    name = 'updatedMigrationRealEstate1678112471740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
