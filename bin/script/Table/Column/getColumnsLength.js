"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColumnsLength = void 0;
const prompt = require("prompt");
const getTableColumName_1 = require("./getTableColumName");
const getColumnsLength = () => {
    prompt.get({
        properties: {
            name: {
                description: "Number of Columns",
            },
        },
    }, function (err, result) {
        if (err)
            console.log(err);
        else {
            if (result.name) {
                const tableColumnsLength = result.name;
                let c = 1;
                const columnsArray = [];
                while (c <= tableColumnsLength) {
                    let column = {
                        name: "",
                        itsNotnull: false,
                        type: "BIT",
                        length: 0,
                    };
                    c++;
                    columnsArray.push(column);
                }
                const columns = (0, getTableColumName_1.getTableColumName)(columnsArray);
            }
        }
    });
};
exports.getColumnsLength = getColumnsLength;
