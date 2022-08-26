import prompt = require("prompt");
import { getColumnTypeLength } from "./getColumnTypeLength";

export const getColumnType = async (columnsArray: Array<any>) => {
  const Array = [];

  for (const iterator of columnsArray) {
    const { columnType } = await prompt.get(["columnType"]);
    const uga = `${columnType}`;
    iterator.type = uga.toUpperCase();
    Array.push(iterator);
  }

  const length = getColumnTypeLength(Array);
};
