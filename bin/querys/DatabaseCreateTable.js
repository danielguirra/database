"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseCreateTable = void 0;
const DataBaseConec_1 = require("./DataBaseConec");
class DatabaseCreateTable {
    DataBaseConec = new DataBaseConec_1.DataBaseConec();
    connect = this.DataBaseConec.conector();
    DBconnect = this.DataBaseConec.DBconnect;
    createTable = (Table) => {
        console.log(this.connect);
        if (!this.connect)
            return;
        if (typeof this.DBconnect === "undefined")
            return;
        this.DBconnect.connect((err) => {
            if (err)
                throw err;
            else {
                let c = 1;
                let sqlQueryBase = `CREATE TABLE ${Table.name} (id INT AUTO_INCREMENT PRIMARY KEY, ${Table.columns[0].name} ${Table.columns[0].type}(${Table.columns[0].length}))`;
                let sqlquery = "";
                if (Table.columns.length > 1) {
                    while (Table.columns.length >= c) {
                        if (c === Table.columns.length - 1)
                            sqlquery = sqlQueryBase.replace("))", `), ${Table.columns[c].name} ${Table.columns[c].type}(${Table.columns[c].length}))`);
                        c++;
                    }
                }
                if (sqlquery === "")
                    sqlquery = sqlQueryBase;
                if (typeof this.DBconnect === "undefined")
                    return;
                this.DBconnect.query(sqlquery, (err, result) => {
                    if (err)
                        console.log("DATABASE " + err.sqlMessage + " CODE : " + err.code);
                    else {
                        if (result.message === "")
                            result.message = "sucess";
                        console.log("Table Created !CODE:[" + result.message + "]");
                        process.exit(0);
                    }
                });
            }
        });
    };
}
exports.DatabaseCreateTable = DatabaseCreateTable;
