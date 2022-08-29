const { writeFileSync } = require("fs");

const varchar = "VARCHAR";
const decimal = "DECIMAL";
const binary = "BINARY";
const blob = "BLOB";
const int = "INT";
const char = "CHAR";

const final = [];

for (let index = 0; index < 100; ) {
  index = index + 5;
  const element = char.replace("CHAR", `CHAR(${index})`);
  final.push(element);
}
for (let index = 100; index < 500; ) {
  index = index + 50;
  const element = char.replace("CHAR", `CHAR(${index})`);
  final.push(element);
}

for (let index = 500; index < 8000; ) {
  index = index + 500;
  const element = char.replace("CHAR", `CHAR(${index})`);
  final.push(element);
}

writeFileSync("char.json", JSON.stringify(final), "utf-8");
