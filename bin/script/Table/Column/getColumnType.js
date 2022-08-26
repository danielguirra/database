"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnType = void 0;
const prompt = require("prompt");
const getColumnTypeLength_1 = require("./getColumnTypeLength");
const getColumnType = async (columnsArray) => {
    const Array = [];
    for (const iterator of columnsArray) {
        const { columnType } = await prompt.get(["columnType"]);
        const uga = `${columnType}`;
        iterator.type = uga.toUpperCase();
        Array.push(iterator);
    }
    const length = (0, getColumnTypeLength_1.getColumnTypeLength)(Array);
};
exports.getColumnType = getColumnType;
