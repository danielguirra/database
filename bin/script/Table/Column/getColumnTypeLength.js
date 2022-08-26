"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnTypeLength = void 0;
const prompt = require("prompt");
const getColumnTypeLength = async (columnArray) => {
    const Array = [];
    for (const iterator of columnArray) {
        const { columnTypeLength } = await prompt.get(['columnTypeLength']);
        iterator.length = columnTypeLength;
        Array.push(iterator);
    }
    const fileCreator = () => [];
};
exports.getColumnTypeLength = getColumnTypeLength;
