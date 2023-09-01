import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableSchedule1693423536312 implements MigrationInterface {
    name = 'AlterTableSchedule1693423536312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "date" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "updateAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "updateAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "realEstates" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "schedules" ALTER COLUMN "date" SET DEFAULT now()`);
    }

}
