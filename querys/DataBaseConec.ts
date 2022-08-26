import { Connection, createConnection } from "mysql";
import dotenv from "dotenv";

dotenv.config();
const host = process.env.DBHOST;
const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;

export class DataBaseConec {
  DBconnect: Connection | undefined;

  conector = () => {
    this.DBconnect = createConnection({
      host: host,
      user: user,
      password: password,
      database: "msec",
    });

    return true;
  };

  test = () => {
    console.log(this.DBconnect);
    if (typeof this.DBconnect === "undefined") return;
    this.DBconnect.connect((err: any) => {
      if (err) throw err;
      else console.log("Connected!");
    });
  };
}
