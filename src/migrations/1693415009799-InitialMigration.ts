import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693415009799 implements MigrationInterface {
    name = 'InitialMigration1693415009799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules" ("id" SERIAL NOT NULL, "date" date NOT NULL DEFAULT now(), "hour" TIME NOT NULL, "userId" integer, CONSTRAINT "PK_7e33fc2ea755a5765e3564e66dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updateAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "realEstates" ("id" SERIAL NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL DEFAULT '0', "size" integer NOT NULL, "createdAt" date NOT NULL, "updateAt" date NOT NULL, CONSTRAINT "PK_57badbed001c9b97de867eaa976" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`DROP TABLE "realEstates"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "schedules"`);
    }

}
