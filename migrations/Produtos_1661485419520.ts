import { DatabaseCreateTable } from "../querys/DatabaseCreateTable";

const create = new DatabaseCreateTable();

create.createTable({
  name: "Produtos",
  columns: [
    { name: "teste", length: 8, type: "VARCHAR", itsNotnull: false },
    { name: "uga", length: 50, type: "INT(10)", itsNotnull: true },
    { name: "EDUGUEI", length: 10, itsNotnull: true, type: "INT" },
  ],
  ID_AUTO_INCREMENT_PRIMARY_KEY: false,
});
