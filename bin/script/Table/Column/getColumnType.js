"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnType = void 0;
const prompt = require("prompt");
const getColumnType = async (columnsArray) => {
    const Array = [];
    for (const iterator of columnsArray) {
        const { columnType } = await prompt.get(['columnType']);
        const uga = `${columnType}`;
        iterator.type = uga.toUpperCase();
        Array.push(iterator);
    }
    console.log(Array);
};
exports.getColumnType = getColumnType;
