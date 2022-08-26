"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTableColumName = void 0;
const prompt = require("prompt");
const getColumnType_1 = require("./getColumnType");
const getTableColumName = async (columnArray) => {
    const Array = [];
    for (const iterator of columnArray) {
        const a = await prompt.get(['columnName']);
        iterator.name = a.columnName;
        Array.push(iterator);
    }
    const type = (0, getColumnType_1.getColumnType)(Array);
};
exports.getTableColumName = getTableColumName;
