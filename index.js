import * as dotenv from 'dotenv';
dotenv.config();

import { Uuid, connect } from 'orm';

console.log(new Uuid().v4())

async function run() {
  const connection = await connect();
  const result = await connection.raw('select * from user')
  console.log(result)

  await connection.disconnect();
}

run()