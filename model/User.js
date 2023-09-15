import { Table } from "orm";

export class User extends Table {
  constructor() {
    super('User');
  }
}