import prompt = require('prompt');

import { getColumnType } from './getColumnType';

export const getTableColumName = async (columnArray: Array<any>) => {
  const Array = [];
  for (const iterator of columnArray) {
    const a = await prompt.get(['columnName']);

    iterator.name = a.columnName;
    Array.push(iterator);
  }
  const type = getColumnType(Array);
};
