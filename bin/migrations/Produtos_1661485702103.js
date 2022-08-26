"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseCreateTable_1 = require("../querys/DatabaseCreateTable");
const create = new DatabaseCreateTable_1.DatabaseCreateTable();
create.createTable({
    name: "Produtos",
    columns: [
        { name: "nome", itsNotnull: false, type: "VARCHAR", length: 32 },
        { name: "cep", itsNotnull: true, type: "INT", length: 14 },
        { name: "preco", itsNotnull: false, type: "FLOAT", length: 4 },
        { name: "fileira", itsNotnull: true, type: "VARCHAR", length: 32 },
        { name: "peso", itsNotnull: false, type: "FLOAT", length: 8 },
    ],
});
