import * as dotenv from 'dotenv';
dotenv.config();

import { Uuid, connect, disconnect, raw } from 'orm';

console.log(new Uuid().v4())

async function run() {
  const connection = await connect();
  const result = await raw(connection, 'select * from user')
  console.log(result)

  await disconnect(connection);
}

run()