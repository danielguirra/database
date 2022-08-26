import { DBTable } from "../interfaces";
import { DataBaseConec } from "./DataBaseConec";

export class DatabaseCreateTable {
  private DataBaseConec = new DataBaseConec();
  private connect = this.DataBaseConec.conector();
  private DBconnect = this.DataBaseConec.DBconnect;

  createTable = (Table: DBTable) => {
    console.log(this.connect);
    if (!this.connect) return;
    if (typeof this.DBconnect === "undefined") return;
    this.DBconnect.connect((err: any) => {
      if (err) throw err;
      else {
        let c = 1;
        let sqlQueryBase = `CREATE TABLE ${Table.name} (id INT AUTO_INCREMENT PRIMARY KEY, ${Table.columns[0].name} ${Table.columns[0].type}(${Table.columns[0].length}))`;
        let sqlquery: string = "";
        if (Table.columns.length > 1) {
          while (Table.columns.length >= c) {
            if (c === Table.columns.length - 1)
              sqlquery = sqlQueryBase.replace(
                "))",
                `), ${Table.columns[c].name} ${Table.columns[c].type}(${Table.columns[c].length}))`
              );
            c++;
          }
        }
        if (sqlquery === "") sqlquery = sqlQueryBase;
        if (typeof this.DBconnect === "undefined") return;
        this.DBconnect.query(sqlquery, (err: any, result: any) => {
          if (err)
            console.log("DATABASE " + err.sqlMessage + " CODE : " + err.code);
          else {
            if (result.message === "") result.message = "sucess";
            console.log("Table Created !CODE:[" + result.message + "]");
            process.exit(0);
          }
        });
      }
    });
  };
}
