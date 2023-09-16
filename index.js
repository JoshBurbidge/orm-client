import * as dotenv from 'dotenv';
dotenv.config();

import { connect, init } from 'orm';
import { User } from './model/User.js';

async function run() {
  const connection = await init()


  const result = await User.findAll();
  console.log(result)

  const one = await User.findById(24);
  console.log(one)

  const newUser = await new User('newUser5', 'newName2', 'customer').save();
  console.log('new: ', newUser)

  await connection.disconnect();
}

run()