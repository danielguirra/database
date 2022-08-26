import { writeFileSync } from "fs";
import { DBTableColumns } from "../../../interfaces";
import { tableFile, tableName } from "../../CreateMigrationBase";

export const fileCreator = (columnArray: Array<DBTableColumns>) => {
  let base = `[]`;
  let string = [];
  for (const iterator of columnArray) {
    string.push(
      `{ name: '` +
        iterator.name +
        `', ` +
        `itsNotnull: ` +
        iterator.itsNotnull +
        `, ` +
        `type: '` +
        iterator.type +
        `', ` +
        `length: ` +
        iterator.length +
        ` }, `
    );
  }
  let final = "";
  for (const iterator of string) {
    final = final + iterator;
  }
  const save = tableFile.replace("[]", `[${final}]`);

  const date = new Date().getTime();
  console.log(save);
  writeFileSync(`./migrations/${tableName}_${date}.ts`, save, "utf-8");
};
