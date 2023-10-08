import { Table } from "orm";

export class User extends Table {

  constructor(userOptions) {
    super();
    this.username = userOptions.username;
    this.name = userOptions.name;
    this.type = userOptions.type;
  }
}