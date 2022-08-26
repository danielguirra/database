import { DBTableColumns } from "../../../interfaces";
import prompt = require("prompt");

import { getTableColumName } from "./getTableColumName";

export const getColumnsLength = () => {
  prompt.get(
    {
      properties: {
        name: {
          description: "Number of Columns",
        },
      },
    },
    function (err, result) {
      if (err) console.log(err);
      else {
        if (result.name) {
          const tableColumnsLength: any = result.name;
          let c = 1;
          const columnsArray = [];
          while (c <= tableColumnsLength) {
            let column: DBTableColumns = {
              name: "",
              itsNotnull: false,
              type: "BIT",
              length: 0,
            };
            c++;
            columnsArray.push(column);
          }

          const columns = getTableColumName(columnsArray);
        }
      }
    }
  );
};
