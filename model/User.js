import { Table } from "orm";

export class User extends Table {
  constructor(connection) {
    super(connection, 'User');
  }
}