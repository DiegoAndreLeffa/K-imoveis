import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedMigrationRealEstate1677851242693 implements MigrationInterface {
    name = 'updatedMigrationRealEstate1677851242693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "addressId" TO "address"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_0a1d19a1afbb53a3029325cca3a" FOREIGN KEY ("address") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_0a1d19a1afbb53a3029325cca3a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "address" TO "addressId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
