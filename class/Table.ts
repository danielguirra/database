import { DBTable, DBTableColumns, DBTableTypes } from "../interfaces";
import { DataBaseConec } from "../querys/DataBaseConec";

export class TableCreator extends DataBaseConec {
  constructor(connection: DataBaseConec, table: DBTable) {
    super();
    if (!this.conector()) {
      console.log(this.DBconnect);
    }

    this.TableName = table.name;
    this.ID_AUTO_INCREMENT_PRIMARY_KEY = table.ID_AUTO_INCREMENT_PRIMARY_KEY;
    this.Columns = table.columns;
  }

  TableName: string | undefined;
  ID_AUTO_INCREMENT_PRIMARY_KEY: boolean | undefined;
  Columns: DBTableColumns | Array<DBTableColumns> | undefined;

  private create = () => {
    try {
      const tete: DBTableTypes = "BINARY(10)";
    } catch (error) {}
  };
}
