import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateSpecificationsCarsFK1634759192912
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "specifications_cars",
      new TableForeignKey({
        name: "FK_Specifications_Cars_Specification",
        referencedTableName: "specifications",
        referencedColumnNames: ["id"],
        columnNames: ["specification_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NUll",
      })
    );

    await queryRunner.createForeignKey(
      "specifications_cars",
      new TableForeignKey({
        name: "FK_Specifications_Cars_Car",
        referencedTableName: "cars",
        referencedColumnNames: ["id"],
        columnNames: ["car_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NUll",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "specifications_cars",
      "FK_Specifications_Cars_Car"
    );
    await queryRunner.dropForeignKey(
      "specifications_cars",
      "FK_Specifications_Cars_Specification"
    );
  }
}
