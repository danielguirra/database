"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseConec = void 0;
const mysql_1 = require("mysql");
const host = process.env.DBHOST;
const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;
class DataBaseConec {
    DBhost;
    DBuser;
    DBpassword;
    DBconnect;
    constructor() {
        if (typeof host === "string" &&
            typeof user === "string" &&
            typeof password === "string") {
            this.DBhost = host;
            this.DBuser = user;
            this.DBpassword = password;
            this.DBconnect = (0, mysql_1.createConnection)({
                host: this.DBhost,
                user: this.DBuser,
                password: this.DBpassword,
                database: "msec",
            });
        }
    }
    test = () => {
        if (typeof this.DBconnect === "undefined")
            return;
        this.DBconnect.connect((err) => {
            if (err)
                throw err;
            else
                console.log("Connected!");
        });
    };
}
exports.DataBaseConec = DataBaseConec;
