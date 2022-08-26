"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnNotNull = void 0;
const prompt = require("prompt");
const fileCreator_1 = require("./fileCreator");
const getColumnNotNull = async (columnArray) => {
    const Array = [];
    for (const iterator of columnArray) {
        const { columnItsNotnull } = await prompt.get(["columnItsNotnull"]);
        iterator.itsNotnull = columnItsNotnull;
        Array.push(iterator);
    }
    const create = (0, fileCreator_1.fileCreator)(Array);
};
exports.getColumnNotNull = getColumnNotNull;
