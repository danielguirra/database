export interface DBTable {
  name: string;
  columns: Array<DBTableColumns>;
  ID_AUTO_INCREMENT_PRIMARY_KEY: boolean;
}

export interface DBTableColumns {
  name: string;
  itsNotnull: boolean;
  type: DBTableTypes;
}

export interface DBTableColumnsArray {
  column: Array<DBTableColumns>;
}

type AllLocaleIDs = `${DBTableTypes | DBTableTypesThatHaveLength}_id`;
type Lang = "en" | "ja" | "pt";

export type DBTableTypesThatHaveLengths = `${Lang}_${AllLocaleIDs}`;

export type DBTableTypesThatHaveLength = ``;

export type DBTableTypes =
  | "BIT"
  | "NUMERIC"
  | "BIGINT"
  | "SMALLINT"
  | "SMALLMONEY"
  | "INT(5)"
  | "INT(10)"
  | "INT(15)"
  | "INT(20)"
  | "INT(25)"
  | "INT(30)"
  | "INT(35)"
  | "INT(40)"
  | "INT(45)"
  | "INT(50)"
  | "INT(55)"
  | "INT(60)"
  | "INT(65)"
  | "INT(70)"
  | "INT(75)"
  | "INT(80)"
  | "INT(85)"
  | "INT(90)"
  | "INT(95)"
  | "INT(100)"
  | "INT(150)"
  | "INT(200)"
  | "INT(250)"
  | "INT(300)"
  | "INT(350)"
  | "INT(400)"
  | "INT(450)"
  | "INT(500)"
  | "INT(1000)"
  | "INT(1500)"
  | "INT(2000)"
  | "INT(2500)"
  | "INT(3000)"
  | "INT(3500)"
  | "INT(4000)"
  | "INT(4500)"
  | "INT(5000)"
  | "INT(5500)"
  | "INT(6000)"
  | "INT(6500)"
  | "INT(7000)"
  | "INT(7500)"
  | "INT(8000)"
  | "TINYINT"
  | "MONEY"
  | "FLOAT"
  | "REAL"
  | "DATE"
  | "DATETIMEOFFSET"
  | "DATETIME2"
  | "SMALLDATETIME"
  | "DATETIME"
  | "TIME"
  | "DECIMAL(5,2)"
  | "DECIMAL(5,3)"
  | "DECIMAL(10,2)"
  | "DECIMAL(10,3)"
  | "DECIMAL(15,2)"
  | "DECIMAL(15,3)"
  | "DECIMAL(20,2)"
  | "DECIMAL(20,3)"
  | "DECIMAL(25,2)"
  | "DECIMAL(25,3)"
  | "DECIMAL(30,2)"
  | "DECIMAL(30,3)"
  | "DECIMAL(35,2)"
  | "DECIMAL(35,3)"
  | "DECIMAL(40,2)"
  | "DECIMAL(40,3)"
  | "DECIMAL(45,2)"
  | "DECIMAL(45,3)"
  | "DECIMAL(50,2)"
  | "DECIMAL(50,3)"
  | "DECIMAL(55,2)"
  | "DECIMAL(55,3)"
  | "DECIMAL(60,2)"
  | "DECIMAL(60,3)"
  | "DECIMAL(65,2)"
  | "DECIMAL(65,3)"
  | "DECIMAL(70,2)"
  | "DECIMAL(70,3)"
  | "DECIMAL(75,2)"
  | "DECIMAL(75,3)"
  | "DECIMAL(80,2)"
  | "DECIMAL(80,3)"
  | "DECIMAL(85,2)"
  | "DECIMAL(85,3)"
  | "DECIMAL(90,2)"
  | "DECIMAL(90,3)"
  | "DECIMAL(95,2)"
  | "DECIMAL(95,3)"
  | "DECIMAL(100,2)"
  | "DECIMAL(100,3)"
  | "DECIMAL(150,3)"
  | "DECIMAL(150,2)"
  | "DECIMAL(200,3)"
  | "DECIMAL(200,2)"
  | "DECIMAL(250,3)"
  | "DECIMAL(250,2)"
  | "DECIMAL(300,3)"
  | "DECIMAL(300,2)"
  | "DECIMAL(350,3)"
  | "DECIMAL(350,2)"
  | "DECIMAL(400,3)"
  | "DECIMAL(400,2)"
  | "DECIMAL(450,3)"
  | "DECIMAL(450,2)"
  | "DECIMAL(500,3)"
  | "DECIMAL(500,2)"
  | "DECIMAL(1000,3)"
  | "DECIMAL(1000,2)"
  | "DECIMAL(1500,3)"
  | "DECIMAL(1500,2)"
  | "DECIMAL(2000,3)"
  | "DECIMAL(2000,2)"
  | "DECIMAL(2500,3)"
  | "DECIMAL(2500,2)"
  | "DECIMAL(3000,3)"
  | "DECIMAL(3000,2)"
  | "DECIMAL(3500,3)"
  | "DECIMAL(3500,2)"
  | "DECIMAL(4000,3)"
  | "DECIMAL(4000,2)"
  | "DECIMAL(4500,3)"
  | "DECIMAL(4500,2)"
  | "DECIMAL(5000,3)"
  | "DECIMAL(5000,2)"
  | "DECIMAL(5500,3)"
  | "DECIMAL(5500,2)"
  | "DECIMAL(6000,3)"
  | "DECIMAL(6000,2)"
  | "DECIMAL(6500,3)"
  | "DECIMAL(6500,2)"
  | "DECIMAL(7000,3)"
  | "DECIMAL(7000,2)"
  | "DECIMAL(7500,3)"
  | "DECIMAL(7500,2)"
  | "DECIMAL(8000,3)"
  | "DECIMAL(8000,2)"
  | "CHAR(5)"
  | "CHAR(10)"
  | "CHAR(15)"
  | "CHAR(20)"
  | "CHAR(25)"
  | "CHAR(30)"
  | "CHAR(35)"
  | "CHAR(40)"
  | "CHAR(45)"
  | "CHAR(50)"
  | "CHAR(55)"
  | "CHAR(60)"
  | "CHAR(65)"
  | "CHAR(70)"
  | "CHAR(75)"
  | "CHAR(80)"
  | "CHAR(85)"
  | "CHAR(90)"
  | "CHAR(95)"
  | "CHAR(100)"
  | "CHAR(150)"
  | "CHAR(200)"
  | "CHAR(250)"
  | "CHAR(300)"
  | "CHAR(350)"
  | "CHAR(400)"
  | "CHAR(450)"
  | "CHAR(500)"
  | "CHAR(1000)"
  | "CHAR(1500)"
  | "CHAR(2000)"
  | "CHAR(2500)"
  | "CHAR(3000)"
  | "CHAR(3500)"
  | "CHAR(4000)"
  | "CHAR(4500)"
  | "CHAR(5000)"
  | "CHAR(5500)"
  | "CHAR(6000)"
  | "CHAR(6500)"
  | "CHAR(7000)"
  | "CHAR(7500)"
  | "CHAR(8000)"
  | `VARCHAR(n)`
  | "VARCHAR(5)"
  | "VARCHAR(10)"
  | "VARCHAR(15)"
  | "VARCHAR(20)"
  | "VARCHAR(25)"
  | "VARCHAR(30)"
  | "VARCHAR(35)"
  | "VARCHAR(40)"
  | "VARCHAR(45)"
  | "VARCHAR(50)"
  | "VARCHAR(55)"
  | "VARCHAR(60)"
  | "VARCHAR(65)"
  | "VARCHAR(70)"
  | "VARCHAR(75)"
  | "VARCHAR(80)"
  | "VARCHAR(85)"
  | "VARCHAR(90)"
  | "VARCHAR(95)"
  | "VARCHAR(100)"
  | "VARCHAR(150)"
  | "VARCHAR(200)"
  | "VARCHAR(250)"
  | "VARCHAR(300)"
  | "VARCHAR(350)"
  | "VARCHAR(400)"
  | "VARCHAR(450)"
  | "VARCHAR(500)"
  | "VARCHAR(1000)"
  | "VARCHAR(1500)"
  | "VARCHAR(2000)"
  | "VARCHAR(2500)"
  | "VARCHAR(3000)"
  | "VARCHAR(3500)"
  | "VARCHAR(4000)"
  | "VARCHAR(4500)"
  | "VARCHAR(5000)"
  | "VARCHAR(5500)"
  | "VARCHAR(6000)"
  | "VARCHAR(6500)"
  | "VARCHAR(7000)"
  | "VARCHAR(7500)"
  | "VARCHAR(8000)"
  | "TEXT"
  | "NCHAR"
  | "NVARCHAR"
  | "NTEXT"
  | "BINARY(5)"
  | "BINARY(10)"
  | "BINARY(15)"
  | "BINARY(20)"
  | "BINARY(25)"
  | "BINARY(30)"
  | "BINARY(35)"
  | "BINARY(40)"
  | "BINARY(45)"
  | "BINARY(50)"
  | "BINARY(55)"
  | "BINARY(60)"
  | "BINARY(65)"
  | "BINARY(70)"
  | "BINARY(75)"
  | "BINARY(80)"
  | "BINARY(85)"
  | "BINARY(90)"
  | "BINARY(95)"
  | "BINARY(100)"
  | "BINARY(150)"
  | "BINARY(200)"
  | "BINARY(250)"
  | "BINARY(300)"
  | "BINARY(350)"
  | "BINARY(400)"
  | "BINARY(450)"
  | "BINARY(500)"
  | "BINARY(1000)"
  | "BINARY(1500)"
  | "BINARY(2000)"
  | "BINARY(2500)"
  | "BINARY(3000)"
  | "BINARY(3500)"
  | "BINARY(4000)"
  | "BINARY(4500)"
  | "BINARY(5000)"
  | "BINARY(5500)"
  | "BINARY(6000)"
  | "BINARY(6500)"
  | "BINARY(7000)"
  | "BINARY(7500)"
  | "BINARY(8000)"
  | "VARBINARY"
  | "IMAGEM";
