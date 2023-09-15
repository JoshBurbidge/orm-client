import * as dotenv from 'dotenv';
dotenv.config();

import { connect, init } from 'orm';
import { User } from './model/User.js';

async function run() {
  // const connection = await connect();
  const connection = await init()


  const result = await User.findAll();

  console.log(result)

  await connection.disconnect();
}

run()