import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1667722006725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "name" TO "course"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" RENAME COLUMN "course" TO "name"`,
    ); // reverts things made in "up" method
  }
}
