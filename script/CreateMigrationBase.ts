import { readFileSync } from "fs";
import prompt = require("prompt");

import { getColumnsLength } from "./Table/Column/getColumnsLength";

const newMigrationForNewTable = prompt;
newMigrationForNewTable.get(
  {
    properties: {
      name: {
        description: "Name of new table",
      },
    },
  },
  function (err, result) {
    if (err) console.log(err);
    else {
      const local = `./migrations/${result.name}.ts`;
      const newTableFile: string = readFileSync(
        "./util/CreateTableBase.ts",
        "utf-8"
      );
      if (typeof result.name === "string") {
        tableFile = newTableFile.replace("TableName", result.name);
        tableName = result.name;
        //Criar um retorno de while com numero de colunas q deve repetir
        const columns = getColumnsLength();
      } else {
        return console.log(
          "The table name must be a string with the first capital letter."
        );
      }
    }
  }
);

export let tableName: any;
export let tableFile: any;
