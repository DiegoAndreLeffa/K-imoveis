import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigrations1677781644191 implements MigrationInterface {
    name = 'createMigrations1677781644191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "admin" DROP DEFAULT`);
    }

}
