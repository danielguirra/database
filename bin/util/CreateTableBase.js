"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseCreateTable_1 = require("../querys/DatabaseCreateTable");
const create = new DatabaseCreateTable_1.DatabaseCreateTable();
create.createTable({
    name: "TableName",
    columns: [],
});
