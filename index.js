import * as dotenv from 'dotenv';
dotenv.config();

import { Uuid, connect } from 'orm';
import { User } from './model/User.js';

console.log(new Uuid().v4())

async function run() {
  const connection = await connect();

  // const result = await connection.raw('select * from user')
  const result = await new User(connection).findAll();
  // await User.findAll();

  console.log(result)

  await connection.disconnect();
}

run()