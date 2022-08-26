"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileCreator = void 0;
const fs_1 = require("fs");
const CreateMigrationBase_1 = require("../../CreateMigrationBase");
const fileCreator = (columnArray) => {
    let base = `[]`;
    let string = [];
    for (const iterator of columnArray) {
        string.push(`{ name: '` +
            iterator.name +
            `', ` +
            `itsNotnull: ` +
            iterator.itsNotnull +
            `, ` +
            `type: '` +
            iterator.type +
            `', ` +
            `length: ` +
            iterator.length +
            ` }, `);
    }
    let final = "";
    for (const iterator of string) {
        final = final + iterator;
    }
    const save = CreateMigrationBase_1.tableFile.replace("[]", `[${final}]`);
    const date = new Date().getTime();
    console.log(save);
    (0, fs_1.writeFileSync)(`./migrations/${CreateMigrationBase_1.tableName}_${date}.ts`, save, "utf-8");
};
exports.fileCreator = fileCreator;
