import { DataBaseConec } from "./DataBaseConec";

export class DatabaseCreate {
  private DataBaseConec = new DataBaseConec();
  private connect = this.DataBaseConec.conector();
  private DBconnect = this.DataBaseConec.DBconnect;
  createDB = () => {
    if (typeof this.DBconnect === "undefined") return;
    if (!this.connect) return;
    try {
      this.DBconnect.connect((err: any) => {
        if (err) console.log("DATABASE : " + err.message);
        else {
          if (typeof this.DBconnect === "undefined") return;
          this.DBconnect.query(
            "CREATE DATABASE msec",
            (err: any, result: any) => {
              if (err) throw err;
              else console.log("Database Created !CODE:[" + result + "]");
            }
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}
