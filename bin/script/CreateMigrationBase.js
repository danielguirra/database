"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableFile = exports.tableName = void 0;
const fs_1 = require("fs");
const prompt = require("prompt");
const getColumnsLength_1 = require("./Table/Column/getColumnsLength");
const newMigrationForNewTable = prompt;
newMigrationForNewTable.get({
    properties: {
        name: {
            description: "Name of new table",
        },
    },
}, function (err, result) {
    if (err)
        console.log(err);
    else {
        const local = `./migrations/${result.name}.ts`;
        const newTableFile = (0, fs_1.readFileSync)("./util/CreateTableBase.ts", "utf-8");
        if (typeof result.name === "string") {
            exports.tableFile = newTableFile.replace("TableName", result.name);
            exports.tableName = result.name;
            //Criar um retorno de while com numero de colunas q deve repetir
            const columns = (0, getColumnsLength_1.getColumnsLength)();
        }
        else {
            return console.log("The table name must be a string with the first capital letter.");
        }
    }
});
