import prompt = require("prompt");
import { fileCreator } from "./fileCreator";

export const getColumnNotNull = async (columnArray: Array<any>) => {
  const Array = [];
  for (const iterator of columnArray) {
    const { columnItsNotnull } = await prompt.get(["columnItsNotnull"]);
    iterator.itsNotnull = columnItsNotnull;
    Array.push(iterator);
  }
  const create = fileCreator(Array);
};
