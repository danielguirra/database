"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseConec = void 0;
const mysql_1 = require("mysql");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const host = process.env.DBHOST;
const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;
class DataBaseConec {
    DBconnect;
    conector = () => {
        this.DBconnect = (0, mysql_1.createConnection)({
            host: host,
            user: user,
            password: password,
            database: "msec",
        });
        return true;
    };
    test = () => {
        console.log(this.DBconnect);
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
