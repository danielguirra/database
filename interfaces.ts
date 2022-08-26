export interface DBTable {
  name: string;
  columns: Array<DBTableColumns>;
}

export interface DBTableColumns {
  name: string;
  itsNotnull: boolean;
  type: DBTableTypes;
  length: number;
}

export interface DBTableColumnsArray {
  column: Array<DBTableColumns>;
}

export type DBTableTypes =
  | 'BIT'
  | 'NUMERIC'
  | 'BIGINT'
  | 'SMALLINT'
  | 'SMALLMONEY'
  | 'INT'
  | 'TINYINT'
  | 'MONEY'
  | 'FLOAT'
  | 'REAL'
  | 'DATE'
  | 'DATETIMEOFFSET'
  | 'DATETIME2'
  | 'SMALLDATETIME'
  | 'DATETIME'
  | 'TIME'
  | 'CHAR'
  | 'VARCHAR'
  | 'TEXT'
  | 'NCHAR'
  | 'NVARCHAR'
  | 'NTEXT'
  | 'BINARY'
  | 'VARBINARY'
  | 'IMAGEM';
