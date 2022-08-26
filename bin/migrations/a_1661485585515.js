"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseCreateTable_1 = require("../querys/DatabaseCreateTable");
const create = new DatabaseCreateTable_1.DatabaseCreateTable();
create.createTable({
    name: "a",
    columns: [
        { name: "teste", length: 8, type: "VARCHAR", itsNotnull: false },
        { name: "uga", length: 50, type: "INT", itsNotnull: true },
        { name: "EDUGUEI", length: 10, itsNotnull: true, type: "INT" },
    ],
});
