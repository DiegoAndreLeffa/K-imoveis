import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedMigrationRealEstate1678195756218 implements MigrationInterface {
    name = 'updatedMigrationRealEstate1678195756218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" DROP DEFAULT`);
    }

}
