import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693593553195 implements MigrationInterface {
    name = 'InitialMigration1693593553195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updateAt" TO "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "updateAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "updatedAt" TO "updateAt"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updatedAt" TO "updateAt"`);
    }

}
