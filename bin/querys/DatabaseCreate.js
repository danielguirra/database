"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseCreate = void 0;
const DataBaseConec_1 = require("./DataBaseConec");
class DatabaseCreate {
    DBconnect = new DataBaseConec_1.DataBaseConec().DBconnect;
    createDB = () => {
        if (typeof this.DBconnect === "undefined")
            return;
        this.DBconnect.connect((err) => {
            if (err)
                console.log("DATABASE : " + err.message);
            else {
                if (typeof this.DBconnect === "undefined")
                    return;
                this.DBconnect.query("CREATE DATABASE msec", (err, result) => {
                    if (err)
                        throw err;
                    else
                        console.log("Database Created !CODE:[" + result + "]");
                });
            }
        });
    };
}
exports.DatabaseCreate = DatabaseCreate;