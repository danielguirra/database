import prompt = require("prompt");
import { getColumnNotNull } from "./getColumnNotNull";

export const getColumnTypeLength = async (columnArray: Array<any>) => {
  const Array = [];

  for (const iterator of columnArray) {
    const { columnTypeLength } = await prompt.get(["columnTypeLength"]);
    iterator.length = columnTypeLength;
    Array.push(iterator);
  }
  const notNull = getColumnNotNull(Array);
};
