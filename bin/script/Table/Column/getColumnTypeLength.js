"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnTypeLength = void 0;
const prompt = require("prompt");
const getColumnNotNull_1 = require("./getColumnNotNull");
const getColumnTypeLength = async (columnArray) => {
    const Array = [];
    for (const iterator of columnArray) {
        const { columnTypeLength } = await prompt.get(["columnTypeLength"]);
        iterator.length = columnTypeLength;
        Array.push(iterator);
    }
    const notNull = (0, getColumnNotNull_1.getColumnNotNull)(Array);
};
exports.getColumnTypeLength = getColumnTypeLength;
