import { DatabaseCreateTable } from "../querys/DatabaseCreateTable";

const create = new DatabaseCreateTable();

create.createTable({
  name: "TableName",
  columns: [],
});
