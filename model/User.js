import { Table } from "orm";

export class User extends Table {

  constructor(username, name, type) {
    super();
    this.username = username;
    this.name = name;
    this.type = type;
  }
}