"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnNotNull = void 0;
const prompt = require("prompt");
const getColumnType_1 = require("./getColumnType");
const getColumnNotNull = async (columnArray) => {
    const Array = [];
    for (const iterator of columnArray) {
        const { columnItsNotnull } = await prompt.get(['columnItsNotnull']);
        iterator.name = columnItsNotnull;
        Array.push(iterator);
    }
    const type = (0, getColumnType_1.getColumnType)(Array);
};
exports.getColumnNotNull = getColumnNotNull;
