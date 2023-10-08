import { Table } from "orm";

export class User extends Table {

  constructor(userOptions) {
    super(userOptions.id);
    this.id = userOptions.id
    this.username = userOptions.username;
    this.name = userOptions.name;
    this.type = userOptions.type;
  }
}